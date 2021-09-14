import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";

//import './App.css';
import {testAction} from "./store/actions/test";

import 'antd/dist/antd.css'

// components 
import LayoutComponent from "./components/layout"




class App extends Component {
  componentDidMount() {
    this.props.test();
  }
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
      <LayoutComponent {...this.props}> 
<div>
  <BaseRouter />
        

        </div>
     </LayoutComponent>
     </Router>
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