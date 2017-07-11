import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import router from './router'


class App extends Component {
  render() {
    return (
      <div>
        {
          router
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}
export default connect(mapStateToProps)(App);