const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const postcssPresetEnv = require('postcss-preset-env');
const postcssImport = require('postcss-import');
const cssnano = require('cssnano');

module.exports = function(options) {
  return function(files, metalsmith, done) {
    const cssFilePath = path.join(options.srcDir, 'styles', 'main.css');
    const outputCSSFilePath = path.join(options.destDir, 'assets', 'styles.css');
    const outputCSSMapFilePath = path.join(options.destDir, 'assets', 'styles.css.map');

    fs.readFile(cssFilePath, 'utf8', (err, css) => {
      if (err) {
        console.error('Error reading CSS file:', err);
        return done(err);
      }

      postcss([postcssImport,postcssPresetEnv,cssnano])
        .process(css, {
          from: cssFilePath,
          to: outputCSSFilePath,
          map: { inline: false },
        })
        .then(result => {
          fs.writeFile(outputCSSFilePath, result.css, err => {
            if (err) {
              console.error('Error writing CSS:', err);
              return done(err);
            }

            if (result.map) {
              fs.writeFile(outputCSSMapFilePath, result.map.toString(), err => {
                if (err) {
                  console.error('Error writing source map:', err);
                }
                done();
              });
            } else {
              done();
            }
            
          });
        })
        .catch(error => {
          console.error('Error processing CSS:', error);
          done(error);
        });
    });
  };
};
