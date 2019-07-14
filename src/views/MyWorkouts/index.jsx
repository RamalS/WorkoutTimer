import React, { Component } from "react";
import Workout from "./components/Workout";
import { Link } from "react-router-dom";

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
               <Link to="createworkout">
                  <div className="create-workout">Create workout</div>
               </Link>
            </div>
         </React.Fragment>
      );
   }
}

export default MyWorkouts;
