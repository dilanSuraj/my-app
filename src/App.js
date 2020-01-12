import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from './components/dashboard';

export default class App extends Component{

  constructor(props){
     super(props);
  }

  componentDidMount(){

  }

  render(){
    return(
      <Router>
        <Route exact path='/' component={Dashboard}/>
      </Router>
    );
  }
}
