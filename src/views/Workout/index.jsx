import React, { Component } from "react";
// custom components
import WorkoutBar from "./components/WorkoutBar";
import Interval from "./components/Interval";
import AddExcercise from "./components/AddExcercise";
// services
import JobService from "../../Service/Storage/WorkoutService";

import "./Workout.css";

class Workout extends Component {
   state = {
      workout: {
         id: "",
         name: "",
         intervals: []
      }
   };

   componentDidMount() {
      const { id } = this.props.match.params;
      const workout = JobService.find("intervals", id);
      this.setState({ ...this.state, workout });
   }

   render() {
      const { workout } = this.state;
      return (
         <React.Fragment>
            <div className="workout">
               <WorkoutBar name={workout.name} />
               {workout.intervals.map((data, i) => (
                  <Interval key={i} data={data} />
               ))}
               <AddExcercise path={`/create-interval/${workout.id}`} />
            </div>
         </React.Fragment>
      );
   }
}

export default Workout;
