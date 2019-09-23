import React, { Component } from "react";
import Workout from "../Workout";

class WorkoutGrid extends Component {
   render() {
      const { workouts } = this.props;
      return (
         <React.Fragment>
            <div>
               {workouts.map((data, i) => (
                  <Workout key={i} data={data} />
               ))}
            </div>
         </React.Fragment>
      );
   }
}

export default WorkoutGrid;
