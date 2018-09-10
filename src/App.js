import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import store from './store'
import MainContainer from './containers/MainContainer';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path={`${process.env.PUBLIC_URL}/`} exact component={MainContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;
