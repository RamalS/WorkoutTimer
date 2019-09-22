import React, { Component } from "react";
import { Link } from "react-router-dom";
import MaterialIcon from "material-icons-react";

class AddExcercise extends Component {
   render() {
      const { path } = this.props;
      return (
         <React.Fragment>
            <div className="add-excercise">
               <Link to={path}>
                  <MaterialIcon icon="add_circle" size={40} />
               </Link>
            </div>
         </React.Fragment>
      );
   }
}

export default AddExcercise;
