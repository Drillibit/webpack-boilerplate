
const message = require('./index.js');

require('./style/css/main.sass');

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
 })
}
