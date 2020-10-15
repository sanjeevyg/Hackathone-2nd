import React, { Component } from 'react';
import Form from './components/UserForm';
import User from './components/User';
import './App.css';


const apiURL = "https://www.potterapi.com/v1/"
const baseURL = "http://localhost:3000/"
class App extends Component {

  state = {
    user: [],
    student: []
  }

  componentDidMount(){
    fetch(`${apiURL}sortingHat`)
      .then(response => response.json())
      .then(house => this.setState({house}))

    fetch(`${baseURL}users`)
      .then(response => response.json())
      .then(console.log)

    // fetch(`${baseURL}student`)
    //   .then(response => response.json())
    //   .then(student=> this.setState({student}))
  }

  addToUser = (newUser) => {
    if(!this.state.user.find(user => user === newUser)) {
      this.setState({user: [...this.state.user, newUser]})
      fetch(`${baseURL}users`, {
        method: "POST", 
        headers: {
          "content-type": "application/json", 
        body: JSON.stringify(newUser)
        }})
      }
    }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Form addToUser={this.addToUser}/>
          <User key={this.state.user.name} userInfo={this.state.user}/>
        </header>
      </div>
    );
  }
}



export default App;
