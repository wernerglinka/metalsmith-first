/* global window, document, localStorage */
import navigation from "./components/navigation";
// end imports

import Swup from 'swup';
import SwupHeadPlugin from '@swup/head-plugin';
import SwupA11yPlugin from '@swup/a11y-plugin';
import SwupBodyClassPlugin from '@swup/body-class-plugin';

const swup = new Swup({
  plugins: [
    new SwupHeadPlugin(),
    new SwupA11yPlugin(),
    new SwupBodyClassPlugin()
  ]
});

function initPage() {
  // start inits
  navigation.init();
  // end inits
}

window.addEventListener("load", function() {
  initPage();
});

swup.hooks.on('page:view', () => {
  initPage();
});
