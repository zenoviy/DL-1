import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";



import { HomePageComponent, AppDescription } from "./components/homeComponent/HomePage";
import { AboutPageComponent } from "./components/aboutComponent/AboutPage";
import { ShopPageComponent } from "./components/shopComponent/ShopPage";
import { NotFound } from "./components/notFoundComponent/NotFoundPage";


function BaseRouter(props){
  return(
    <Router>
      <div className="app-menu">
        <nav className="menu-body container">
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="selected">Home</NavLink>
            </li>
            <li>
              <NavLink exact to="/about-page" activeClassName="selected">About</NavLink>
            </li>
            <li>
              <NavLink exact to="/shop-page" activeClassName="selected">Shop</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path="/">
          <HomePageComponent></HomePageComponent>
        </Route>
        <Route exact path="/about-page">
          <AboutPageComponent></AboutPageComponent>
        </Route>
        <Route exact path="/shop-page/:name">
          <ShopPageComponent></ShopPageComponent>
        </Route>
        <Route exact path="/shop-page">
          <ShopPageComponent></ShopPageComponent>
        </Route>
        <Route path="*">
            <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}


function App() {
  const appLocalState = {
    name: "APP.js component"
  }

  return (
    <div className="App">
      <h1>Render Component</h1>
      <BaseRouter></BaseRouter>
    </div>
  );
}

export default App;
