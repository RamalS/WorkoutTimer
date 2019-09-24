import React, { Component } from "react";
import Speech from "speak-tts";
import NoSleep from "react-no-sleep";
// custom components
import WorkoutBar from "./components/WorkoutBar";
import Interval from "./components/Interval";
import AddExcercise from "./components/AddExcercise";
// services
import WorkoutService from "../../Service/Storage/WorkoutService";
import IntervalService from "../../Service/Storage/IntervalService";

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
         },
         intervals: []
      };

      this.noSleep = new NoSleep();

      this.noSleep.handleEnable();
   }

   componentWillMount() {
      this.fetchData();
   }

   componentWillUnmount() {
      this.noSleep.handleDisable();
   }

   workoutInterval = () => {
      const { intervals, workout } = this.state;

      if (this.duration >= workout.intervals[this.index].duration) {
         intervals[this.index].show = false;
         this.setState({ ...this.state, startWorkout: false });
         this.duration = 0;
         if (this.index + 1 < intervals.length) {
            this.index++;
            this.speek();
         } else {
            this.index = 0;
            this.fetchData();
            clearInterval(this.intervalId);
         }
      } else {
         this.duration++;
         intervals[this.index].duration -= 1;
         this.setState({ ...this.state });
      }
   };

   fetchData = () => {
      const { id } = this.props.match.params;
      WorkoutService.find("interval", id).then(response => {
         let intervals = response.intervals.map(interval => {
            return { ...interval, show: true };
         });

         this.setState({
            ...this.state,
            workout: response,
            intervals
         });
      });
   };

   speek = () => {
      const { intervals } = this.state;
      const speech = new Speech();
      speech
         .speak({
            text: `Hell, ${intervals[this.index].name} for ${intervals[this.index].duration} seconds`
         })
         .then(() => {})
         .catch(e => {});
   };

   onStart = () => {
      this.setState({ ...this.state, startWorkout: true });
      this.intervalId = setInterval(this.workoutInterval, 1000);
      this.speek();
   };

   onDelete = (id, workoutId) => {
      const { workout } = this.state;
      IntervalService.delete(id, workoutId).then(response => {
         let intervals = response.map(interval => {
            return { ...interval, show: true };
         });

         this.setState({
            ...this.state,
            workout: { ...workout, intervals: intervals },
            intervals
         });
      });
   };

   render() {
      const { workout, intervals } = this.state;
      console.log(this.state);
      return (
         <React.Fragment>
            <div className="workout">
               <WorkoutBar name={workout.name} onStart={this.onStart} />
               <div className="interval-container">
                  {intervals.map((data, i) => (
                     <Interval key={i} data={data} onDelete={this.onDelete} />
                  ))}
               </div>
               <AddExcercise path={`/create-interval/${workout.id}`} />
            </div>
         </React.Fragment>
      );
   }
}

export default Workout;
