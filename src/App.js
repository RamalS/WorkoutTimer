import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./views/Main";
import MyWorkouts from "./views/MyWorkouts";

import "./App.css";

function App() {
   return (
      <div className="App">
         <Router>
            <Route component={Main} exact path="/" />
            <Route component={MyWorkouts} path="/myworkouts" />
         </Router>
      </div>
   );
}

export default App;
