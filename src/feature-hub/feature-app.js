require('../dist/main-es5.js');
require('../dist/polyfills-es5.js');
require('../dist/runtime-es5.js');

const featureAppDefinition = {
  id: 'feature-app',

  create(env) {
    const selectedModel = 'ID.3';
    const headerText = 'From CMS';
    const modelCopy = 'Also from CMS';

    return {
      attachTo(containerDiv) {
        console.log('test');
        containerDiv.innerHTML =
          '<vw-models selectedModel="${selectedModel}"></vw-models>';
      }
    };
  }
};

exports.default = featureAppDefinition;
