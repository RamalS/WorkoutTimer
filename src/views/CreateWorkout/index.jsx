import React, { Component } from "react";
import QuickLayout from "../../components/QuickLayout";
import CreateWorkoutForm from "./components/CreateWorkoutForm";

class CreateWorkout extends Component {
   render() {
      return (
         <React.Fragment>
            <QuickLayout path="/my-workouts">
               <CreateWorkoutForm />
            </QuickLayout>
         </React.Fragment>
      );
   }
}

export default CreateWorkout;
