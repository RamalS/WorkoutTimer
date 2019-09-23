import React, { Component } from "react";
// custom components
import QuickLayout from "./../../components/QuickLayout";
import CreateIntervalForm from "./components/CrateIntervalForm";

class CreateInterval extends Component {
   render() {
      const { id } = this.props.match.params;
      return (
         <React.Fragment>
            <QuickLayout onClick={this.props.history.goBack}>
               <CreateIntervalForm id={id} />
            </QuickLayout>
         </React.Fragment>
      );
   }
}

export default CreateInterval;
