import React, { Component } from "react";
import QuickLayout from "../../components/QuickLayout";
import CreateWorkoutForm from "./components/CreateWorkoutForm";

class CreateWorkout extends Component {
   render() {
      return (
         <React.Fragment>
            <QuickLayout onClick={this.props.history.goBack}>
               <CreateWorkoutForm />
            </QuickLayout>
         </React.Fragment>
      );
   }
}

export default CreateWorkout;
