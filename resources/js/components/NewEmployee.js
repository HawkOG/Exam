import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
export default class NewEmployee extends Component {
    constructor(){
        super()
        this.state = {
            name:'',
            lastname:'',
            specialization:'',
            company:'',
            city:'',
            gender:'',
            rating:'',
            like:''
        }
    }

    handleSubmit(e){
        e.preventDefault()
        axios.post('http://localhost/egzaminas/public/employees', this.state)
        .then(response => {
          console.log(response)
          history.push('http://localhost/egzaminas/public/create_employee')
        })
        .catch(error => {
          this.setState({
            errors: error.response.data.errors
          })
        })


      }
    
      // INPUTS //
    
        handleNameChange(e){
          this.setState({
            name: e.target.value
          })
        }
        handleLastNameChange(e){
          this.setState({
            lastname: e.target.value
          })
        }
        handleSpecializationChange(e){
          this.setState({
            specialization: e.target.value
          })
        }
        handleCompanyChange(e){
          this.setState({
            company: e.target.value
          })
        }
        handleCityChange(e){
          this.setState({
            city: e.target.value
          })
        }
        handleGenderChange(e){
          this.setState({
            gender: e.target.value
          })
        }
        handleRatingChange(e){
          this.setState({
            rating: e.target.value
          })
        }
        handleLikeChange(e){
          this.setState({
            like: e.target.value
          })
        }
      // END-INPUTS //
  render() {
    return (
      <div className="container">
              <h4>New Employee</h4>
              <form onSubmit={this.handleSubmit.bind(this)} className="form w-50 mx-auto">
              <input type="text" name="name" onChange={this.handleNameChange.bind(this)} placeholder="Name" className="form-control"/>
              <input type="text" name="lastname" onChange={this.handleLastNameChange.bind(this)} placeholder="Last Name" className="form-control"/>
              <input type="text" name="specialization" onChange={this.handleSpecializationChange.bind(this)} placeholder="Specialization" className="form-control"/>
              <input type="text" name="company" onChange={this.handleCompanyChange.bind(this)} placeholder="Company" className="form-control"/>
              <input type="text" name="city" onChange={this.handleCityChange.bind(this)} placeholder="City" className="form-control"/>
              <input type="text" name="gender" onChange={this.handleGenderChange.bind(this)} placeholder="Gender" className="form-control"/>
              <input type="number" name="rating" onChange={this.handleRatingChange.bind(this)} placeholder="Rating" className="form-control"/>
              <input type="text" name="like" onChange={this.handleLikeChange.bind(this)} placeholder="Like" className="form-control"/>
              <button type="submit" className="btn btn-stellar">Register</button>
              </form>
            </div>
    )
  }
}

if (document.getElementById('newemployee')) {
    ReactDOM.render(<NewEmployee />, document.getElementById('newemployee'));
}
