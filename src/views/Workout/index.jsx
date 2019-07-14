import React, { Component } from "react";
import WorkoutBar from "./components/WorkoutBar";
import Rep from "./components/Rep";

import "./Workout.css";

class Workout extends Component {
   state = {
      workout: {
         name: "workout1",
         repetition: [
            { type: "excercise", duration: 30 },
            { type: "rest", duration: 30 },
            { type: "excercise", duration: 30 },
            { type: "rest", duration: 30 }
         ]
      }
   };
   render() {
      const { workout } = this.state;
      return (
         <React.Fragment>
            <div className="workout">
               <WorkoutBar name={workout.name} />
               {workout.repetition.map((data, i) => (
                  <Rep key={i} data={data} />
               ))}
            </div>
         </React.Fragment>
      );
   }
}

export default Workout;
