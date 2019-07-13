import React, { Component } from "react";
import background from "../../assets/images/main_background.jpg";
import "./Main.css";

class Main extends Component {
   state = {};
   render() {
      return (
         <React.Fragment>
            <div className="main">
               <div className="my-workout">
                  <button>My workouts</button>
               </div>
            </div>
         </React.Fragment>
      );
   }
}

export default Main;
