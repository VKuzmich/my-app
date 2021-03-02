import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Ford', age: "12" },
            { name: 'Dan', age: "22" },
            { name: 'Kan', age: "32" }
        ],
        otherState: "Something other"
    }

    switchNameHandler = (newName) => {
        // console.log('was clicked!')
        // Don't do this - this.state.persons[0].name = "Grigoriy";
        this.setState({
            persons: [
                { name: newName, age: "12" },
                { name: 'Dan', age: "29" },
                { name: 'Kan', age: "52" }
            ]})
    }

    render() {
      return (
          <div className="App">
            <h1>Hi! i am react app!!!</h1>
            <p>Just paragraph!!!</p>
            <button onClick={() => this.switchNameHandler('Dorogoi')}>Switch Name</button>
            <Person name={this.state.persons[0].name}
                    age={this.state.persons[0].age}/>
            <Person name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'Firm')}> My hobbies: hiking! </Person>
            <Person name={this.state.persons[2].name}
                    age={this.state.persons[2].age}/>
          </div>
      );
      //   return React.createElement('div',  {className: 'App'}, React.createElement('h1', null, 'Hi, i\'m React App!!!') )
    }
}

export default App;
