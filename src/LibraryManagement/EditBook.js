import React, { useState } from "react";
import Header from "./Header";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  List,
} from "@material-ui/core";
import "./EditBook.css";
// import { db } from "../firebase";
import db from "../firebase";
import firebase from "firebase";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation, useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
function EditBook() {
  let location = useLocation();
  // let { id } = props.match.params;

  // console.log(JSON.stringify(location.state));
  // let bookId = 1;

  const classes = useStyles();
  const [bid, setBid] = useState(location.state ? location.state.id : "");
  const [bookName, setBookName] = useState(
    location.state ? location.state.bookName : ""
  );
  const [author, setAuthor] = useState(
    location.state ? location.state.author : ""
  );
  const [bookImage, setBookImage] = useState(
    location.state ? location.state.bookImage : ""
  );
  const [bookDesc, setBookDesc] = useState(
    location.state ? location.state.bookDesc : "stuff"
  );
  const [bookCopies, setBookCopies] = useState(
    location.state ? location.state.bookCopies : ""
  );
  const [bookGenre, setBookGenre] = useState(
    location.state ? location.state.bookGenre : ""
  );
  const logInfo = (event) => {
    event.preventDefault();
    db.collection("books").doc(bid).set({
      bookName: bookName,
      author: author,
      bookImage: bookImage,
      bookDesc: bookDesc,
      bookCopies: bookCopies,
      bookGenre: bookGenre,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    clearAll();
    alert("Thank you ");
  };
  const clearAll = () => {
    setBookName(bookName);
    setAuthor(author);
    setBookImage(bookImage);
    setBookDesc(bookDesc);
    setBookCopies(bookCopies);
    setBookGenre(bookGenre);
  };
  return (
    <div>
      <Header />

      <form className="addNewBook__form">
        <FormControl>
          <InputLabel>Book Name</InputLabel>
          <Input
            value={bookName}
            placeholder="Name of the Book"
            onChange={(event) => {
              setBookName(event.target.value);
            }}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Author</InputLabel>
          <Input
            value={author}
            placeholder="author"
            onChange={(event) => {
              setAuthor(event.target.value);
            }}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Book Description</InputLabel>
          <Input
            value={bookDesc}
            placeholder="Description"
            onChange={(event) => {
              setBookDesc(event.target.value);
            }}
          />
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel>Book Genre</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={bookGenre}
            onChange={(event) => {
              setBookGenre(event.target.value);
            }}
          >
            <MenuItem value={"Science Fiction"}>Science Fiction</MenuItem>
            <MenuItem value={"Thriller"}>Thriller</MenuItem>
            <MenuItem value={"children"}>Children's book</MenuItem>
            <MenuItem value={"Horror"}>Horror</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel>Number of copies</InputLabel>
          <Input
            value={bookCopies}
            placeholder="Copies in stock"
            onChange={(event) => {
              setBookCopies(event.target.value);
            }}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Book Image</InputLabel>
          <Input
            value={bookImage}
            placeholder="Book Image"
            onChange={(event) => {
              setBookImage(event.target.value);
            }}
          />
        </FormControl>
        <Button
          variant="contained"
          disabled={!bookName || !author || !bookImage}
          color="primary"
          type="submit"
          onClick={logInfo}
        >
          Update
        </Button>
      </form>
    </div>
  );
}

export default EditBook;
