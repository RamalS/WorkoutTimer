import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./views/Main";
import MyWorkouts from "./views/MyWorkouts";
import CreateWorkout from "./views/CreateWorkout";
import Workout from "./views/Workout";

import "./App.css";

function App() {
   return (
      <div className="App">
         <Router>
            <Route component={Main} exact path="/" />
            <Route component={MyWorkouts} path="/my-workouts" />
            <Route component={CreateWorkout} path="/create-workout" />
            <Route component={Workout} path="/workout/:id" />
         </Router>
      </div>
   );
}

export default App;
