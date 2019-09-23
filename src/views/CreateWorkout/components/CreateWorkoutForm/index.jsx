import React, { Component } from "react";
// services
import WorkoutService from "../../../../Service/Storage/WorkoutService";

class CreateWorkoutForm extends Component {
   constructor() {
      super();
      this.state = {
         formFileds: {
            name: ""
         }
      };
   }

   onSubmit = e => {
      const { formFileds } = this.state;

      e.preventDefault();
      WorkoutService.create(formFileds.name)
         .then(response => {
            this.setState({ ...this.state, formFileds: { name: "" } });
         })
         .catch(err => {});
   };

   onChange = e => {
      this.setState({
         ...this.state,
         formFileds: { [e.target.name]: e.target.value }
      });
   };

   render() {
      const { formFileds } = this.state;
      return (
         <React.Fragment>
            <form className="input-form" onSubmit={this.onSubmit}>
               <label htmlFor="name">Workout Name</label>
               <input
                  type="text"
                  className="classic-input"
                  name="name"
                  onChange={this.onChange}
                  value={formFileds.name}
               />
               <input
                  type="submit"
                  className="classic-input btn-primary"
                  value="Create"
               />
            </form>
         </React.Fragment>
      );
   }
}

export default CreateWorkoutForm;
