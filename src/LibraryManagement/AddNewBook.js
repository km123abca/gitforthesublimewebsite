import React, { useState } from "react";
import Header from "./Header";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  List,
} from "@material-ui/core";
import "./AddNewBook.css";
// import { db } from "../firebase";
import db from "../firebase";
import firebase from "firebase";

function AddNewBook() {
  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [bookImage, setBookImage] = useState("");
  const [bookDesc, setBookDesc] = useState("");
  const [bookCopies, setBookCopies] = useState("");
  const logInfo = (event) => {
    event.preventDefault();
    db.collection("books").add({
      bookName: bookName,
      author: author,
      bookImage: "/bookimages/" + bookImage,
      bookDesc: bookDesc,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    clearAll();
    alert("Thank you ");
  };
  const clearAll = () => {
    setBookName("");
    setAuthor("");
    setBookImage("");
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
          Add
        </Button>
      </form>
    </div>
  );
}

export default AddNewBook;
