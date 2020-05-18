import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from './pages/SignUp';
import Profile from './pages/Profile'
import Groupreview from './pages/Groupreview'
import Mainpage from './pages/MainPage'
import StartTrip from './pages/StartTrip'

function App() {
  return (
    <div className="App">

<<<<<<< HEAD
        {/* <Profile/> */}
        {/* <Groupreview/> */}

=======
>>>>>>> 0e4620960911dfd26f8637d2db5d8395abf23502
        <Router>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/sign-up" component={SignUp} />
<<<<<<< HEAD
            <Route exact path="/main-page" component={Mainpage} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/review" component={Groupreview} />
            <Route exact path="/trips" component={StartTrip} />
          </Switch>
        </Router>
=======
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/group" component={Groupreview} />
          </Switch>
        </Router>

>>>>>>> 0e4620960911dfd26f8637d2db5d8395abf23502
    </div>
  );
}

export default App;
