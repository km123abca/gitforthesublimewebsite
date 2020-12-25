import React from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
function Logout() {
  const history = useHistory();
  auth.signOut();
  history.push("/library/books");
  return <div></div>;
}

export default Logout;
