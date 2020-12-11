import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Library from "./LibraryManagement/Library";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/library">
            <Library />
          </Route>
          <Route path="/p2">
            <h1>This is project2</h1>
          </Route>
          <Route path="/">
            <h1>This is the Home Page</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
