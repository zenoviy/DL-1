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
import { ShopSinglePageComponent } from "./components/shopComponent/shopSingleComponent/ShopSinglePage";
import { UsersPageComponent } from "./components/usersComponent/UsersPage";
import { NotFound } from "./components/notFoundComponent/NotFoundPage";
import { FooterPageComponent } from "./components/footerComponent/FooterPart";

import { ShopProvider } from "./components/shopComponent/shopProvider";
import { UserProvider } from "./components/usersComponent/userProvider";


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
              <NavLink  to="/shop-page" activeClassName="selected">Shop</NavLink>
            </li>
            <li>
              <NavLink exact to="/users-page" activeClassName="selected">Users</NavLink>
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
        <Route exact path="/users-page">
          <UserProvider appData={props.appData}>
            <UsersPageComponent appData={props.appData}></UsersPageComponent>
          </UserProvider>
        </Route>
        <Route exact path="/shop-page/:name">
          <ShopProvider appData={props.appData}>
            <ShopSinglePageComponent></ShopSinglePageComponent>
          </ShopProvider>
        </Route>
        <Route exact path="/shop-page">
          <ShopProvider appData={props.appData}>
            <ShopPageComponent></ShopPageComponent>
          </ShopProvider>
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
    name: "APP.js component",
    HOST: "http://localhost:3500/"
  }

  return (
    <div className="App">
      <div className="container page-body">
        <h1>Render Component</h1>
      </div>
      <BaseRouter appData={appLocalState}></BaseRouter>
      <FooterPageComponent></FooterPageComponent>
    </div>
  );
}

export default App;
