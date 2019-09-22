import React, { Component } from "react";
import { Link } from "react-router-dom";
//custom components
import WorkoutGrid from "./components/WorkoutGrid";
import NavBar from "../../components/NavBar";
//services
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
      this.setState({ ...this.state, workouts: WorkoutService.find() });
      let obj = {id: "k0ustdvk", name: "Workout333333", workouts: {}};
      WorkoutService.update(obj)
   }

   render() {
      const { workouts } = this.state;
      return (
         <React.Fragment>
            <NavBar name="My workouts" />
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
