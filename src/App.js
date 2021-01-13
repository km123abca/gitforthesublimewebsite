import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Library from "./LibraryManagement/Library";
import Books from "./LibraryManagement/Books";
import Login from "./LibraryManagement/Login";
import AddNewBook from "./LibraryManagement/AddNewBook";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Logout from "./LibraryManagement/Logout";
import EditBook from "./LibraryManagement/EditBook";
import BookDetailed from "./LibraryManagement/BookDetailed";
function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
        // dispatch({ type: "SET_BASKET_ON_RELOAD" });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: { email: "Guest" },
        });
        // dispatch({ type: "SET_BASKET_ON_RELOAD" });
      }
    });

    return () => {
      unsuscribe();
    };
  }, []);
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
          <Route exact path="/library/edit/">
            <EditBook />
          </Route>
          <Route exact path="/library/detailed/">
            <BookDetailed />
          </Route>
          <Route exact path="/library/login">
            <Login />
          </Route>
          <Route exact path="/library/logout">
            <Logout />
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
