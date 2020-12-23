import React, { useState } from "react";
import "./Login.css";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  List,
} from "@material-ui/core";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [pword, setPword] = useState("");
  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, pword)
      .then((auth) => {
        history.push("/library/books");
      })
      .catch((e) => alert(e.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, pword)
      .then((auth) => {
        history.push("/library/books");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div>
      <form className="login__form">
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input
            value={email}
            type="email"
            placeholder="Your Email here"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Password</InputLabel>
          <Input
            value={pword}
            type="password"
            placeholder="Your Password here"
            onChange={(event) => {
              setPword(event.target.value);
            }}
          />
        </FormControl>
        <Button
          variant="contained"
          disabled={!email || !pword}
          color="primary"
          //   type="submit"
          onClick={login}
        >
          Login
        </Button>
      </form>
      <Button
        variant="contained"
        disabled={!email || !pword}
        color="primary"
        //   type="submit"
        onClick={register}
      >
        Register
      </Button>
    </div>
  );
}

export default Login;
