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
import Home from "./components/Home/Home";
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
      <NavBar />
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/users" exact={true}>
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/" exact>
          <Home />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
