import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ForgotPassword from "./components/ForgotPasswordPage/ForgotPassword";
import Login from "./components/LoginPage/Login";
import Register from "./components/RegisterPage/Register";
import Home from "./components/HomePage/Home";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Login} exact={true} />
          <Route path="/register" component={Register} exact={true} />
          <Route path="/forgot-password" component={ForgotPassword} exact={true} />
          <Route path="/home" component={Home} exact={true} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
