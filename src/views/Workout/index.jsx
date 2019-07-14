import React, { Component } from "react";
import WorkoutBar from "./components/WorkoutBar";
import Rep from "./components/Rep";
import MaterialIcon from "material-icons-react";

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
               <div className="add-excercise">
                  <button>
                     <MaterialIcon icon="add_circle" size={40} />
                  </button>
               </div>
            </div>
         </React.Fragment>
      );
   }
}

export default Workout;
