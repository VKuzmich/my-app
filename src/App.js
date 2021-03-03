import React, { Component } from 'react';
import './App.css';
// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';
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
            { name: 'Ford', age: "12" },
            { name: 'Dan', age: "22" },
            { name: 'Kan', age: "32" }
        ],
        otherState: "Something other"
    }



    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: 'Lord', age: "72" },
                { name: event.target.value, age: "59" },
                { name: 'San', age: "42" }
            ],
            showPersons: false
        })
    }

    deletePersonHandler = (personIndex) => {
        const persons = this.state.persons;
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow });
    }

    render() {
      const style = {
          backgroundColor: "white",
          font: 'inherit',
          border: "2px solid blue",
          padding: '8px',
          cursor: 'pointer'
      };

      let persons = null

      if (this.state.showPersons) {
          persons = (
              <div>
                  {this.state.persons.map((person, index) => {
                      return < Person
                          click={() => this.deletePersonHandler(index)}
                          name={person.name}

                          age={person.age} />
                  })}

              </div>
          )
      }

      return (
          <div className="App">
            <h1>Hi! i am react app!!!</h1>
            <p>Just paragraph!!!</p>
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
