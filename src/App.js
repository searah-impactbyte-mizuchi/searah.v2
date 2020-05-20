import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import GroupReview from "./pages/Groupreview";
import StartTrip from "./pages/StartTrip";
import MainPage from "./pages/NewMainPage"

function App() {
    return (
        <div className="App">
            {/* <Profile/> */}
            {/* <Groupreview/> */}

            <Router>
                <Switch>
                    <Route exact path="/" component={SignIn} />
                    <Route exact path="/sign-up" component={SignUp} />
                    <Route exact path="/main-page" component={MainPage} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/review" component={GroupReview} />
                    <Route exact path="/trips" component={StartTrip} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
