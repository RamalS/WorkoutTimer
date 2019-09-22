import React, { Component } from "react";
// custom components
import WorkoutBar from "./components/WorkoutBar";
import Rep from "./components/Rep";
import AddExcercise from "./components/AddExcercise";
// services
import JobService from "../../Service/Storage/WorkoutService";

import "./Workout.css";

class Workout extends Component {
   state = {
      workout: {
         name: "",
         workouts: []
      }
   };

   componentDidMount() {
      const { id } = this.props.match.params;
      const workout = JobService.find("workouts", id);
      this.setState({ ...this.state, workout });
   }

   render() {
      const { workout } = this.state;
      return (
         <React.Fragment>
            <div className="workout">
               <WorkoutBar name={workout.name} />
               {workout.workouts.map((data, i) => (
                  <Rep key={i} data={data} />
               ))}
               <AddExcercise />
            </div>
         </React.Fragment>
      );
   }
}

export default Workout;
