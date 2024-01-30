/* eslint-disable import/no-extraneous-dependencies */
import { performance } from 'perf_hooks';
import browserSync from 'browser-sync';

import { msBuild } from './metalsmith.js';

let devServer = null;
let t1 = performance.now();
const ms = msBuild();

ms.build( err => {
  if ( err ) {
    throw err;
  }
  /* eslint-disable no-console */
  console.log( `Build success in ${ ( ( performance.now() - t1 ) / 1000 ).toFixed( 1 ) }s` );
  if ( ms.watch() ) {
    if ( devServer ) {
      t1 = performance.now();
      devServer.reload();
    } else {
      devServer = browserSync.create();
      devServer.init( {
        host: 'localhost',
        server: './build',
        port: 3000,
        injectChanges: false,
        reloadThrottle: 0
      } );
    }
  }
} );