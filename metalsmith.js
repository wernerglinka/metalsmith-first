/* eslint-disable import/no-extraneous-dependencies */

import path from 'path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import Metalsmith from "metalsmith";
import markdown from "@metalsmith/markdown";
import layouts from "@metalsmith/layouts";
import esbuild from "@metalsmith/js-bundle";
import permalinks from "@metalsmith/permalinks";
import assets from "metalsmith-static-files";
import sitemap from 'metalsmith-sitemap';
import robots from 'metalsmith-robots';
import prism from "metalsmith-prism";
import mypostcss from "./local_modules/mypostcss/index.js";

// ESM does not currently import JSON modules by default.
// Ergo we'll JSON.parse the file manually
import * as fs from 'fs';
const dependencies = JSON.parse( fs.readFileSync( './package.json' ) ).dependencies;

const __dirname = dirname( fileURLToPath( import.meta.url ) );

/**
 * @function dataToNunjucksGlobals
 * @returns {Object} An object of objects with the file name as the key and
 *  the file content as the value
 * 
 * This function adds metadata files to the build process programmatically.
 */
const dataToNunjucksGlobals = () => {
  const dataDir = path.join( __dirname, 'lib', 'data' );
  const files = fs.readdirSync( dataDir );
  return files.reduce( ( obj, file ) => {
    const fileName = file.replace( '.json', '' );
    const fileContents = fs.readFileSync( path.join( dataDir, file ), 'utf8' );
    obj[ fileName ] = JSON.parse( fileContents );
    return obj;
  }, {} );
};


/**
 * engineOptions
 * @type {Object}
 * @description This object is passed to the layouts plugin and allows us to
 *  pass options to the Nunjucks templating engine.
 */
import * as nunjucksFilters from './nunjucks-filters/index.js';


const engineOptions = {
  path: [ "lib/layouts" ],
  filters: nunjucksFilters,
  globals: { refData: dataToNunjucksGlobals() }
};

export function msBuild() {
  const isProduction = process.env.NODE_ENV === 'production';

  return (
    Metalsmith( __dirname )
      .clean( true )
      .ignore( [ '**/.DS_Store', 'lib/assets/styles.css', 'lib/assets/styles.css.map' ] )
      .watch( isProduction ? false : [ 'src', 'lib' ] )
      //.env( 'DEBUG', process.env.DEBUG )
      .env( 'NODE_ENV', process.env.NODE_ENV )
      .source( "./src" )
      .destination( "./build" )
      .metadata( {
        msVersion: dependencies.metalsmith,
        nodeVersion: process.version,
      } )

      .use( markdown() )

      .use( permalinks() )

      .use( layouts( {
        directory: "lib/layouts",
        engineOptions
      } ) )

      // Syntax highlighting
      .use(
        prism( {
          lineNumbers: true,
          decode: true,
        } )
      )

      .use(
        esbuild( {
          entries: {
            "assets/scripts": "lib/scripts/main.js",
          },
          drop: [],
        } )
      )

      .use( mypostcss( {
        srcDir: 'lib',
        destDir: 'lib',
      } ) )

      //Build assets
      .use(
        assets( {
          source: "lib/assets/",
          destination: "assets/",
        } )
      )

      .use( robots( {
        "useragent": "*",
        "sitemap": "https://www.example.com/sitemap.xml"
      } ) )

      .use( sitemap( {
        hostname: 'https://www.example.com',
        omitIndex: true,
        omitExtension: true,
        changefreq: 'weekly',
        lastmod: new Date(),
        pattern: [ '**/*.html', '!**/404.html' ],
        defaults: {
          priority: 0.5,
          changefreq: 'weekly',
          lastmod: new Date()
        }
      } ) )
  );
};