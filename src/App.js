import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from './pages/SignUp';
import Profile from './pages/Profile'
import StartTrip from './pages/StartTrip'

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/dashboard/profile" component={Profile} />
            <Route exact path="/dashboard/trips" component={StartTrip} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
