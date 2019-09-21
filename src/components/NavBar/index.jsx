import React, { Component } from "react";
import "./NavBar.css";

class NavBar extends Component {
   render() {
      const { name } = this.props;
      return (
         <React.Fragment>
            <div className="nav-bar">
               <h2>{name}</h2>
            </div>
         </React.Fragment>
      );
   }
}

export default NavBar;
