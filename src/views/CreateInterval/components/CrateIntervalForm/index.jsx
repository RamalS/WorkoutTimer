import React, { Component } from "react";
// services
import IntervalService from "../../../../Service/Storage/IntervalService";

class CreateIntervalForm extends Component {
   constructor() {
      super();
      this.state = {
         formFileds: {
            name: "",
            duration: ""
         }
      };
   }

   onSubmit = e => {
      const { id } = this.props;
      const { formFileds } = this.state;

      e.preventDefault();
      IntervalService.create({
         workoutId: id,
         name: formFileds.name,
         duration: formFileds.duration
      })
         .then(response => {
            this.setState({
               ...this.state,
               formFileds: { name: "", duration: "" }
            });
         })
         .catch(err => {});
   };

   onChange = e => {
      this.setState({
         ...this.state,
         formFileds: {
            ...this.state.formFileds,
            [e.target.name]: e.target.value
         }
      });
   };

   render() {
      const { formFileds } = this.state;
      return (
         <React.Fragment>
            <form className="input-form" onSubmit={this.onSubmit}>
               <label htmlFor="name">Interval Name</label>
               <input
                  type="text"
                  className="classic-input"
                  name="name"
                  onChange={this.onChange}
                  value={formFileds.name}
               />
               <label htmlFor="name">Interval Duration</label>
               <input
                  type="number"
                  className="classic-input"
                  name="duration"
                  onChange={this.onChange}
                  value={formFileds.duration}
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

export default CreateIntervalForm;
