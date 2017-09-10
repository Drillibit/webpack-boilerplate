import React from 'react';
import ReactDom from 'react-dom';
require('./style/css/main.sass');
const App = () => {
  return <div>Hello world!</div>;
}

ReactDom.render(<App />, document.querySelector('.container'));
