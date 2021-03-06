import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import GroupReview from "./pages/GroupReview";
import Mainpage from "./pages/NewMainPage";
import StartTrip from "./pages/StartTrip";
import AboutUs from "./pages/Aboutus"


function App() {
    return (
        <div className="App">

            <Router>
                <Switch>
                    <Route exact path="/" component={SignIn} />
                    <Route exact path="/sign-up" component={SignUp} />
                    <Route exact path="/main-page" component={Mainpage} />
                    <Route exact path="/profile/:id" component={Profile} />
                    <Route exact path="/review/:id" component={GroupReview} />
                    <Route exact path="/trips" component={StartTrip} />
                    <Route exact path="/about" component={AboutUs} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
