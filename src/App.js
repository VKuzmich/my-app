import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
// import Person from './Person/Person';


class App extends Component {

    state = {
        username: "Denmark"
    }

    usernameChangeHandler = (event) => {
        this.setState({username: event.target.value});
    }

    render() {
        return (
            <div className='App'>
                <UserInput changed={this.usernameChangeHandler}
                           currentName={this.state.username}/>
                <UserOutput userName={this.state.username} />
                <UserOutput userName={this.state.username} />
                <UserOutput userName='Serg'/>
            </div>
        )
    }

    // state = {
    //     persons: [
    //         { name: 'Ford', age: "12" },
    //         { name: 'Dan', age: "22" },
    //         { name: 'Kan', age: "32" }
    //     ],
    //     otherState: "Something other"
    // }
    //
    // switchNameHandler = (newName) => {
    //     // console.log('was clicked!')
    //     // Don't do this - this.state.persons[0].name = "Grigoriy";
    //     this.setState({
    //         persons: [
    //             { name: newName, age: "12" },
    //             { name: 'Dan', age: "29" },
    //             { name: 'Kan', age: "52" }
    //         ]})
    // }
    //
    // nameChangedHandler = (event) => {
    //     this.setState({
    //         persons: [
    //             { name: 'Lord', age: "72" },
    //             { name: event.target.value, age: "59" },
    //             { name: 'San', age: "42" }
    //         ]})
    // }
    //
    // render() {
    //   const style = {
    //       backgroundColor: "white",
    //       font: 'inherit',
    //       border: "2px solid blue",
    //       padding: '8px',
    //       cursor: 'pointer'
    //   };
    //
    //
    //   return (
    //       <div className="App">
    //         <h1>Hi! i am react app!!!</h1>
    //         <p>Just paragraph!!!</p>
    //         <button
    //             style={style}
    //             onClick={() => this.switchNameHandler('Dorogoi')}>Switch Name</button>
    //         <Person name={this.state.persons[0].name}
    //                 age={this.state.persons[0].age}/>
    //         <Person name={this.state.persons[1].name}
    //                 age={this.state.persons[1].age}
    //                 click={this.switchNameHandler.bind(this, 'Firm')}
    //                 changed={this.nameChangedHandler}> My hobbies: hiking! </Person>
    //         <Person name={this.state.persons[2].name}
    //                 age={this.state.persons[2].age}/>
    //       </div>
    //   );
    //   //   return React.createElement('div',  {className: 'App'}, React.createElement('h1', null, 'Hi, i\'m React App!!!') )
    // }
}

export default App;
