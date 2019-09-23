import React, { Component } from "react";
import { Link } from "react-router-dom";
// custom components
import WorkoutGrid from "./components/WorkoutGrid";
import NavBar from "../../components/NavBar";
// services
import WorkoutService from "../../Service/Storage/WorkoutService";

import "./MyWorkouts.css";

class MyWorkouts extends Component {
   constructor() {
      super();
      this.state = {
         workouts: []
      };
   }

   componentDidMount() {
      WorkoutService.find().then(response => {
         this.setState({ ...this.state, workouts: response });
      });
   }

   render() {
      const { workouts } = this.state;
      return (
         <React.Fragment>
            <NavBar name="My workouts" path="/" />
            <div className="my-workouts">
               <WorkoutGrid workouts={workouts} />
               <Link to="/create-workout">
                  <div className="create-workout">Create workout</div>
               </Link>
            </div>
         </React.Fragment>
      );
   }
}

export default MyWorkouts;
