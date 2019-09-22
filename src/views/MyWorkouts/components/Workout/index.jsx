import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Workout.css";

class Workout extends Component {
   state = {};
   render() {
      const { data } = this.props;
      return (
         <React.Fragment>
            <Link to={`/workout/${data.id}`}>
               <div className="workoutt">
                  <div className="name">
                     <p>{data.name}</p>
                  </div>
               </div>
            </Link>
         </React.Fragment>
      );
   }
}

export default Workout;
