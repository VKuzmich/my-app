import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    render() {
      return (
          <div className="App">
            <h1>Hi! i am react app!!!</h1>
            <p>Just paragraph!!!</p>
            <Person />
            <Person />
            <Person />
          </div>
      );
      //   return React.createElement('div',  {className: 'App'}, React.createElement('h1', null, 'Hi, i\'m React App!!!') )
    }
}

export default App;
