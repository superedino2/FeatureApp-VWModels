require('../dist/main-es5.js');
require('../dist/polyfills-es5.js');
require('../dist/runtime-es5.js');

const featureAppDefinition = {
  id: 'feature-app',

  create(env) {
    return {
      attachTo(containerDiv) {
        console.log('test');
        containerDiv.innerHTML =
          '<vw-models title="VW Models"></vw-models>';
      }
    };
  }
};

exports.default = featureAppDefinition;
