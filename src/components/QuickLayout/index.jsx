import React, { Component } from "react";
import { Link } from "react-router-dom";
import MaterialIcon from "material-icons-react";
import "./QuickLayout.css";

class QuickLayout extends Component {
   render() {
      const { path } = this.props;
      return (
         <React.Fragment>
            <div className="quick-layout">
               <Link to={path}>
                  <MaterialIcon icon="clear" size={40} />
               </Link>
               <div className="clearfix" />
               <div className="children">{this.props.children}</div>
            </div>
         </React.Fragment>
      );
   }
}

export default QuickLayout;
