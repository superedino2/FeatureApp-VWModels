require('../dist/main.js');
require('../dist/polyfills.js');
require('../dist/runtime.js');

const featureAppDefinition = {
  id: 'feature-app',

  create(env) {
    return {
      attachTo(containerDiv) {
        containerDiv.innerHTML =
          '<vw-models title="VW Models"></vw-models>';
      }
    };
  }
};

exports.default = featureAppDefinition;
