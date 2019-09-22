import React, { Component } from "react";

import "./Interval.css";

class Interval extends Component {
   state = {};
   render() {
      const { data } = this.props;
      return (
         <React.Fragment>
            <div className="interval">
               <div className="type">
                  <p>{data.name}</p>
               </div>
               <div className="duration">
                  <p>{data.duration}</p>
               </div>
            </div>
         </React.Fragment>
      );
   }
}

export default Interval;
