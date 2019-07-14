import React, { Component } from "react";
import { Link } from "react-router-dom";
import { addToTable, getAllFromTable } from "../../databaseManager";
import "./Main.css";

class Main extends Component {
   state = {};

   componentDidMount() {
      addToTable("excercise", {
         name: "excercise2",
         type: "excercise",
         duration: 30
      });
      console.log(getAllFromTable("excercise"));
   }

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
