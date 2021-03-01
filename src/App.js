import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
      return (
          <div className="App">
            <h1>Hi! i am react app!!!</h1>
          </div>
      );
      //   return React.createElement('div',  {className: 'App'}, React.createElement('h1', null, 'Hi, i\'m React App!!!') )
    }
}

export default App;
