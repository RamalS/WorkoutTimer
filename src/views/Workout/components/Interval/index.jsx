import React, { Component } from "react";
import { Link } from "react-router-dom";
import ClickNHold from "react-click-n-hold";

import "./Interval.css";

class Interval extends Component {
   constructor(props) {
      super(props);
      this.state = {
         showEdit: false,
         showOutline: false
      };
   }

   get editStyle() {
      const { showEdit } = this.state;
      let display = "none";
      if (showEdit) {
         display = "block";
      }

      return { display };
   }

   get intervalContainerStyle() {
      const { showOutline } = this.state;
      let border = { border: "none" };
      if (showOutline) {
         border = { border: "1px solid red", borderRadius: "10px" };
      }

      return border;
   }

   get intervalStyle() {
      const { data } = this.props;
      let display = "none";
      if (data.show) {
         display = "block";
      }

      return { display };
   }

   render() {
      const { data, onDelete } = this.props;
      return (
         <React.Fragment>
            <div className="interval" style={this.intervalStyle}>
               <div className="container" style={this.intervalContainerStyle}>
                  <ClickNHold
                     time={0.3}
                     onStart={() =>
                        this.setState({ ...this.state, showOutline: true })
                     }
                     onClickNHold={() =>
                        this.setState({ ...this.state, showEdit: true })
                     }
                     onEnd={() =>
                        this.setState({ ...this.state, showOutline: false })
                     }
                  >
                     <div className="type">
                        <p>{data.name}</p>
                     </div>
                  </ClickNHold>
                  <div className="duration">
                     <p>{data.duration}</p>
                  </div>
               </div>

               <div className="edit" style={this.editStyle}>
                  <div className="container">
                     <Link to={`/edit-interval/${data.id}`}>Edit</Link>
                     <button
                        onClick={onDelete.bind(this, data.id, data.workoutId)}
                     >
                        Delete
                     </button>
                     <button
                        onClick={() =>
                           this.setState({ ...this.state, showEdit: false })
                        }
                     >
                        Cancle
                     </button>
                  </div>
               </div>
            </div>
         </React.Fragment>
      );
   }
}

export default Interval;
