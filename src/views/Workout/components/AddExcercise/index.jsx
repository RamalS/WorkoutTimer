import React, { Component } from "react";
import MaterialIcon from "material-icons-react";

class AddExcercise extends Component {
   render() {
      return (
         <React.Fragment>
            <div className="add-excercise">
               <button>
                  <MaterialIcon icon="add_circle" size={40} />
               </button>
            </div>
         </React.Fragment>
      );
   }
}

export default AddExcercise;
