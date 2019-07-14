import React, { Component } from "react";

import "./Rep.css";

class Rep extends Component {
   state = {};
   render() {
      const { data } = this.props;
      return (
         <React.Fragment>
            <div className="rep">
               <div className="type">
                  <p>{data.type}</p>
               </div>
               <div className="duration">
                  <p>{data.duration}</p>
               </div>
            </div>
         </React.Fragment>
      );
   }
}

export default Rep;
