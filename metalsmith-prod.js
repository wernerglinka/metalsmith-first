import drafts from "@metalsmith/drafts";
import htmlMinifier from "metalsmith-html-minifier";
import { msBuild } from './metalsmith.js';

const ms = msBuild();
// filter out draft for production
ms.use( drafts() );
// minify HTML in production
ms.use( htmlMinifier() );

ms.build( err => {
  if ( err ) {
    throw err;
  }
  /* eslint-disable no-console */
  console.log( `Build success` );
} );