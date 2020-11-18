import React from "react";
import "./App.css";
import Footer from "./Footer.js";
import Login from "./Login.js";
import Navigation from "./Navigation.js";
import Body from "./Body.js";
import Header from "./Header.js";
import Analysis from "./Analysis.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import Input from "./Input.js";
import Search from "./Search.js";
import Settings from "./Settings";
function App() {
  const [{ user, item }] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div>
          {item ? (
            <Router>
              <Navigation />
              <Switch>
                <Route path="/search/:id" children={<Search />}></Route>
                <Route exact path="/">
                  <Header />
                  <Body />
                </Route>
                <Route path="/nutrition" children={<Analysis />}></Route>
                <Route path="/account/settings" children={<Settings />}></Route>
              </Switch>
              <Footer />
            </Router>
          ) : (
            <Input />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
