import React, { Component } from "react";
import iphone from "./iphone.jpg";

import "./DesktopLayout.css";

class DesktopLayout extends Component {
   render() {
      return (
         <React.Fragment>
            <div className="desktop-layout">
               <div className="container">{this.props.children}</div>
               <img src={iphone} />
            </div>
         </React.Fragment>
      );
   }
}

export default DesktopLayout;
