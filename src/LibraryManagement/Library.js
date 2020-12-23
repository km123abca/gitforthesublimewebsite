import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Library.css";

function Library() {
  return (
    // <div>
    //   <Router>
    //     <Switch>
    //       <Route path="/books">
    //         <Header />
    //         Nothing here right now
    //       </Route>
    //       <Route path="/">
    //         <Header />
    //         <h1>Welcome page is under construction</h1>
    //       </Route>
    //     </Switch>
    //   </Router>
    // </div>
    <div>
      <Header />
      <div className="library__body">
        <h1>The Library home is under construction</h1>
      </div>
    </div>
  );
}

export default Library;
