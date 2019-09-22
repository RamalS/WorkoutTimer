import React, { Component } from "react";
// services
import IntervalService from "../../../../Service/Storage/IntervalService";

class EditIntervalForm extends Component {
   constructor() {
      super();
      this.state = {
         formFileds: {
            name: "",
            duration: ""
         },
         interval: {}
      };
   }

   componentDidMount() {
      const { id } = this.props;
      IntervalService.find(id, null).then(response => {
         this.setState({
            ...this.state,
            formFileds: { name: response.name, duration: response.duration },
            interval: response
         });
      });
   }

   onSubmit = e => {
      const { formFileds, interval } = this.state;

      e.preventDefault();
      IntervalService.update({
         ...interval,
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
                  value="Update"
               />
            </form>
         </React.Fragment>
      );
   }
}

export default EditIntervalForm;
