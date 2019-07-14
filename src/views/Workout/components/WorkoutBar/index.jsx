import React, { Component } from "react";
import MaterialIcon, { colorPalette } from "material-icons-react";

import "./WorkoutBar.css";

class WorkoutBar extends Component {
   state = {};
   render() {
      const { name } = this.props;
      return (
         <React.Fragment>
            <div className="workout-bar">
               <h2>{name}</h2>
               <button>
                  <div className="start">
                     <MaterialIcon icon="arrow_right" color="#ffffff" />
                     <span>start</span>
                  </div>
               </button>
            </div>
         </React.Fragment>
      );
   }
}

export default WorkoutBar;
