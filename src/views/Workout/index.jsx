import React, { Component } from "react";
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
               <h1>{workout.name}</h1>
               {workout.repetition.map((data, i) => (
                  <Rep key={i} data={data}/>
               ))}
            </div>
         </React.Fragment>
      );
   }
}

export default Workout;
