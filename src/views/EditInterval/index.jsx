import React, { Component } from "react";
// custom components
import QuickLayout from "../../components/QuickLayout";
import EditIntervalForm from "./components/EditIntervalFrom";

class EditInterval extends Component {
   render() {
      const { id } = this.props.match.params;
      return (
         <React.Fragment>
            <QuickLayout onClick={this.props.history.goBack}>
               <EditIntervalForm id={id}/>
            </QuickLayout>
         </React.Fragment>
      );
   }
}

export default EditInterval;
