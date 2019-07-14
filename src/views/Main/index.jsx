import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Main.css";

class Main extends Component {
   state = {};

   render() {
      return (
         <React.Fragment>
            <div className="main">
               <div />
               <Link to="/myworkouts">
                  <div className="my-workout">My workouts</div>
               </Link>
            </div>
         </React.Fragment>
      );
   }
}

export default Main;
