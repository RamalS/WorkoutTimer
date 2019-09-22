import React, { Component } from "react";
// custom components
import WorkoutBar from "./components/WorkoutBar";
import Interval from "./components/Interval";
import AddExcercise from "./components/AddExcercise";
// services
import WorkoutService from "../../Service/Storage/WorkoutService";

import "./Workout.css";

class Workout extends Component {
   constructor() {
      super();
      this.index = 0;
      this.duration = 0;

      this.state = {
         startWorkout: false,
         workout: {
            id: "",
            name: "",
            intervals: []
         }
      };
   }

   componentWillMount() {
      const { id } = this.props.match.params;
      WorkoutService.find("interval", id).then(response => {
         let intervals = response.intervals.map(interval => {
            return { ...interval, show: true };
         });

         this.setState({
            ...this.state,
            workout: {
               ...response,
               intervals
            }
         });
      });
   }

   workoutInterval = () => {
      const { workout } = this.state;
      const { intervals } = workout;

      if (this.duration >= intervals[this.index].duration) {
         intervals[this.index].show = false;
         this.setState({ ...this.state, startWorkout: false });
         clearInterval(this.intervalId);
      } else {
         this.duration++;
         console.log(this.duration);
      }
   };


   onStart = () => {
      this.setState({ ...this.state, startWorkout: true });
      this.intervalId = setInterval(this.workoutInterval, 100);
   };

   render() {
      const { workout } = this.state;
      console.log(this.state);
      return (
         <React.Fragment>
            <div className="workout">
               <WorkoutBar name={workout.name} onStart={this.onStart} />
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
