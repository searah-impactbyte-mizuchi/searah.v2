import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from './pages/SignUp';
import Mainpage from "./pages/MainPage"

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/main-page" component={Mainpage} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
