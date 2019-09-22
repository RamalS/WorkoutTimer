import React, { Component } from "react";
// custom components
import WorkoutBar from "./components/WorkoutBar";
import Interval from "./components/Interval";
import AddExcercise from "./components/AddExcercise";
// services
import WorkoutService from "../../Service/Storage/WorkoutService";

import "./Workout.css";

class Workout extends Component {
   state = {
      workout: {
         id: "",
         name: "",
         intervals: []
      }
   };

   componentWillMount() {
      const { id } = this.props.match.params;
      WorkoutService.find("interval", id).then(respones => {
         this.setState({ ...this.state, workout: respones });
      });
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
