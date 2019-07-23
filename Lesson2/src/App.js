import React from 'react';
import ReactDOM from 'react-dom';
import Developer from 'new.js';

class App extends React.Component {
  render() {
    return <div>
      <h1>Первое приложение на React</h1>
      <p>Hello React!</p>
    </div>
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));