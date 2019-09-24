import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./views/Main";
import MyWorkouts from "./views/MyWorkouts";
import CreateWorkout from "./views/CreateWorkout";
import CreateInterval from "./views/CreateInterval";
import EditInterval from "./views/EditInterval";
import Workout from "./views/Workout";

import "./App.css";

function App() {
   return (
      <React.Fragment>
         <Router>
            <Route component={Main} exact path="/" />
            <Route component={MyWorkouts} path="/my-workouts" />
            <Route component={CreateWorkout} path="/create-workout" />
            <Route component={Workout} path="/workout/:id" />
            <Route component={CreateInterval} path="/create-interval/:id" />
            <Route component={EditInterval} path="/edit-interval/:id" />
         </Router>
      </React.Fragment>
   );
}

export default App;
