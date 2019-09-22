import React, { Component } from "react";
// services
import WorkoutService from "../../../../Service/Storage/WorkoutService";

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
      const item = WorkoutService.find("intervals", id);
      item.intervals.push({
         name: formFileds.name,
         duration: formFileds.duration
      });

      WorkoutService.update(item);
      this.setState({ ...this.state, formFileds: { name: "", duration: "" } });
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
