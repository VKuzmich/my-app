import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';


class App extends Component {

    // state = {
    //     username: "Denmark"
    // }
    //
    // usernameChangeHandler = (event) => {
    //     this.setState({username: event.target.value});
    // }
    //
    // render() {
    //     return (
    //         <div className='App'>
    //             <UserInput changed={this.usernameChangeHandler}
    //                        currentName={this.state.username}/>
    //             <UserOutput userName={this.state.username} />
    //             <UserOutput userName={this.state.username} />
    //             <UserOutput userName='Serg'/>
    //         </div>
    //     )
    // }

    state = {
        persons: [
            { id: 'qwer', name: 'Ford', age: "12" },
            { id: '1234', name: 'Dan', age: "22" },
            { id: 'asdf', name: 'Kan', age: "32" }
        ],
        otherState: "Something other"
    }



    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        } );

        const person = {
            ...this.state.persons[personIndex]
        };

        // const person = Object.assign(({}, this.state.persons[personIndex]))

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        })
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons]
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow });
    }

    render() {
      const style = {
          backgroundColor: "green",
          color: 'white',
          font: 'inherit',
          border: "2px solid blue",
          padding: '8px',
          cursor: 'pointer',
          ':hover': {
              backgroundColor: 'lightgreen',
              color: 'black'
          }
      };

      let persons = null

      if (this.state.showPersons) {
          persons = (
              <div>
                  {this.state.persons.map((person, index) => {
                      return < Person
                          click={() => this.deletePersonHandler(index)}
                          name={person.name}
                          age={person.age}
                          key={person.id}
                          changed={(event) => this.nameChangedHandler(event, person.id)}
                      />
                  })}

              </div>
          );
          style.backgroundColor = 'red';
          style[':hover'] = {
              backgroundColor: 'salmon',
              color: 'black'
          }
      }

      const classes = [];
      if (this.state.persons.length <= 2) {
          classes.push('red');
      }
      if (this.state.persons.length <= 1) {
          classes.push("bold")
      }

      return (

              <div className="App">
                <h1>Hi! i am react app!!!</h1>
                <p className={classes.join(' ')}>Just paragraph!!!</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Switch Name</button>
                  {persons}
              </div>

      );
      //   return React.createElement('div',  {className: 'App'}, React.createElement('h1', null, 'Hi, i\'m React App!!!') )
    }
}

export default App;
