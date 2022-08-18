import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ClientList from './components/ClientList';
import ClientEdit from "./components/ClientEdit";
import MenuList from "./components/MenuList";
import MenuEdit from "./components/MenuEdit";
import CartList from "./components/CartList";
import LoginForm from "./components/LoginForm";

class App extends Component {
  render() {
    return (

        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/clients' exact={true} component={ClientList}/>
            <Route path='/clients/:id' component={ClientEdit}/>

            <Route path='/menu' exact={true} component={MenuList}/>
            <Route path='/menu/edit' exact={true} component={MenuEdit}/>

          <Route path='/cart' exact={true} component={CartList}/>
             <Route path='/LoginForm' exact={true} component={LoginForm}/>
          </Switch>
        </Router>
    )
  }
}

export default App;