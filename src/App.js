import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import SignIn from "./pages/SignIn";
// import SignUp from './pages/SignUp';
// import Profile from './pages/Profile'
import Groupreview from './pages/Groupreview'

function App() {
  return (
    <div className="App">

        {/* <Profile/> */}
        <Groupreview/>

        {/* <Router>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/sign-up" component={SignUp} />
          </Switch>
        </Router> */}
    </div>
  );
}

export default App;
