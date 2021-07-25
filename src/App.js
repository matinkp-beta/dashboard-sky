import React, { Component } from "react";
import { connect } from "react-redux";
import './App.css';
import {testAction} from "./store/actions/test";

import 'antd/dist/antd.css'






class App extends Component {
  componentDidMount() {
    this.props.test();
  }
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App-root">
      
      <div className="App" style={{bottom:"0px"}}>
        <h1 style={{color:"white"}}>  this is where everything start </h1> 
        
        <h1 style={{color:"white"}}>  {this.props.description} </h1> 

       
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
   description: state.test.description,
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
   test: () => dispatch(testAction())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);