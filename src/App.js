import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./views/Main";

import "./App.css";

function App() {
   return (
      <div className="App">
         <Router>
            <Route component={Main} exact path="/" />
         </Router>
      </div>
   );
}

export default App;
