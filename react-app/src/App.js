import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "tailwindcss/tailwind.css"
import "./index.css"
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import Splash from "./components/Splash/Splash";
import Home from "./components/Home/Home";
import FullVis from './components/FullVis/FullVis'
import { authenticate } from "./store/session";


function App() {
  // const [authenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false);

  // sets user to authenticated or else sends back errors
  // we're only going to look at users and using it to set authenticated val
  useEffect(() => {
    (async () => {
      // send a request to backend to chheck it user is authenticated

      // we are just waiting for a response to
      // just to make sure that we check so that way
      // we can set loaded to true.... so we can prevent
      // timing errors
      await dispatch(authenticate());
      setLoaded(true);

    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>

        <Route path="/splash" exact>
          <Splash />
        </Route>

        <Route path="/test" exact>
          <FullVis />
        </Route>

        <ProtectedRoute path="/" exact>
          <NavBar />
          <Home />
        </ProtectedRoute>

        <Route>
          <h1>404</h1>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
