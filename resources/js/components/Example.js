import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import style from '../../sass/app.scss'
library.add(faHeart)
export default class Example extends Component {
  constructor(){
    super()
    this.state = {
      employee: [],
      avatars: []
    }
  }

  
  componentWillMount(){
    axios.get('http://localhost/egzaminas/public/employees').then(response => {
      this.setState({
        employee: response.data
      })
    })
  }

  componentDidUpdate(){
    axios.get('/https://tinyfac.es/api/users').then(response => {
      this.setState({
        avatars: response.avatars
      })
     
    })
  }
 
  
    render() {
      console.log(this.state.avatars)
      console.log(this.state.employee)
        return (
          <div>
            <div class="container bg-info border p-3">
              <div className="row justify-content-around">
              <form className="form-inline">
                <input type="text" name="search" className="form-control ml-2" placeholder="Paieška"/>

                <select name="specialization" className="form-control ml-2">Specialybe
                  <option value="spec.id">Specialybė</option>
                  {this.state.employee.map(spec => <option value="{spec.id}">{spec.specialization}</option>)}
                </select>

                <select name="specialization" className="form-control ml-2">Servisas
                <option value="spec.id">Servisas</option>
                {this.state.employee.map(spec => <option value="{spec.id}">{spec.company}</option>)}
                </select>

                <select name="specialization" className="form-control ml-2">Miestas
                <option value="spec.id">Specialybė</option>
                {this.state.employee.map(spec => <option value="{spec.id}">{spec.city}</option>)}
                </select>
                
                <select name="specialization" className="form-control ml-2">Lytis
                <option value="spec.id">Lytis</option>
                {this.state.employee.map(spec => <option value="{spec.id}">{spec.gender}</option>)}
                </select>

                <select name="specialization" className="form-control ml-2">Reitingas
                <option value="spec.id">Reitingas</option>
                {this.state.employee.map(spec => <option value="{spec.id}">{spec.rating}</option>).reverse()}
                </select>
              </form>
              
              </div>
            </div>

            <div className="container pt-3 mt-5">
              {this.state.employee.map(item => <li key={item.id} className="nav-link">
                <div className="card mb-4 mt-4" key={item.id}>
                  <div className="row">
                <div className="col-md-2"><img src={`https://api.adorable.io/avatars/150/abotsxt${Math.floor(Math.random() * 50000 + 6)}@adorable.io.png`}/></div>
                <div className="col-md-5 pt-3">
                <label className="d-block text-left">Vardas: {item.name} {item.lastname}</label>
                <label className="d-block text-left">Specialybė: {item.specialization}</label>
                <label className="d-block text-left">Įmonė: {item.company}</label>
                <label className="d-block text-left">Miestas: {item.city}</label>
                </div>
                <div className="col-md-5 pt-5">Reitingas
                <label className="d-block text-left"> {item.rating} (Balsai: {Math.floor(Math.random()* 10000 + 1 ) }) </label>
                <label className="d-block text-left"> <FontAwesomeIcon icon="heart" className="likeheart" /> </label>
                
                </div></div></div></li>
              )}
              


              
            </div>
            
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
