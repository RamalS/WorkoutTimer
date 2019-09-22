import React, { Component } from "react";
import { Link } from "react-router-dom";
import MaterialIcon from "material-icons-react";

import "./NavBar.css";

class NavBar extends Component {
   render() {
      const { name, path } = this.props;
      return (
         <React.Fragment>
            <div className="nav-bar">
               <h2>{name}</h2>
               <div className="back">
                  <Link to={path}>
                     <MaterialIcon
                        icon="keyboard_backspace"
                        size={40}
                        color="white"
                     />
                  </Link>
               </div>
            </div>
         </React.Fragment>
      );
   }
}

export default NavBar;
