import React, { Component } from "react";
import Workout from "./components/Workout";

import "./MyWorkouts.css";

class MyWorkouts extends Component {
   state = {
      workouts: [{ name: "workout1" }, { name: "workout2" }]
   };

   render() {
      const { workouts } = this.state;
      return (
         <React.Fragment>
            <div className="my-workouts">
               <div>
                  {workouts.map((data, i) => (
                     <Workout key={i} data={data} />
                  ))}
               </div>
            </div>
         </React.Fragment>
      );
   }
}

export default MyWorkouts;
