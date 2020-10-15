import React, { Component } from 'react';


const apiURL = "https://www.potterapi.com/v1/"

class Form extends Component {
  state = {
        name: "",
        house: ""
  }

  handleChange = (event) => {
      this.setState({
        name: event.target.value
      })
      this.componentDidMount()
  
}

  componentDidMount(){
      fetch(`${apiURL}sortingHat`)
        .then(response => response.json())
        .then(house => this.setState({house}))
  }

 
  handleSubmit = (event) => {
      event.preventDefault()
      this.props.addToUser(this.state)
      console.log(this.state)
  }


  render() {
        return(
            <div>
              <form className="user-form" onSubmit={this.handleSubmit}>
              <label className="name-label">Name</label>
              <input name="name" value={this.state.name} onChange={this.handleChange} placeholder="name"/>
              <input className="submit-button" type="submit"/>
              </form> 
            </div>
        )  
    }
}

export default Form;


// ravenclaw 
// gryffindor
// hufflepuff 
// slytherin
