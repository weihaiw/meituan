import React, { Component } from 'react';
import './App.css';
import Login from './compoments/Login.js'
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'
import Sign from './compoments/Sign.js'
import Home from './compoments/Home.js'
import Search from './compoments/search.js'
import Dingdan from './compoments/Dingdan.js'
import Ｒestaurant from './compoments/Ｒestaurant.js'
import My from './compoments/My.js'
import { Provider } from 'react-redux'
import store from './redux/store.js'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            <Route exact path="/" component={Home}/>
            <Route path="/Login" component={Login}/>
            <Route path="/sign" component={Sign}/>
            <Route path="/search" component={Search}/>
            <Route path="/dingdan" component={Dingdan}/>
            <Route path="/my" component={My}/>     
            <Route path="/restaurant/:id" component={Ｒestaurant}/>     
          </div>      
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
