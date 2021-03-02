import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ personsState, setPersonsState ] = useState({
        persons: [
            {name: 'Ford', age: "12"},
            {name: 'Dan', age: "22"},
            {name: 'Kan', age: "32"}
        ],
        otherState: "Something other"
    });

    const switchNameHandler = () => {
        // console.log('was clicked!')
        // Don't do this - this.state.persons[0].name = "Grigoriy";
        setPersonsState({
            persons: [
                {name: 'Ferdinand', age: "12"},
                {name: 'Dan', age: "29"},
                {name: 'Kan', age: "52"}
            ]
        });
    }
      return (
          <div className="App">
            <h1>Hi! i am react app!!!</h1>
            <p>Just paragraph!!!</p>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> My hobbies: hiking! </Person>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
          </div>
      );
      //   return React.createElement('div',  {className: 'App'}, React.createElement('h1', null, 'Hi, i\'m React App!!!') )

}

export default app;
