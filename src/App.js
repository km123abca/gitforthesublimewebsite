import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Library from "./LibraryManagement/Library";
import Books from "./LibraryManagement/Books";
import Login from "./LibraryManagement/Login";
import AddNewBook from "./LibraryManagement/AddNewBook";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/library">
            <Library />
          </Route>
          <Route exact path="/library/books">
            <Books />
          </Route>
          <Route exact path="/library/add">
            <AddNewBook />
          </Route>
          <Route exact path="/library/login">
            <Login />
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
