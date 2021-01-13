import "./Books.css";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import BookOne from "./BookOne";
import "./Books.css";
import db from "../firebase";
import firebase from "firebase";
import { useLocation } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  List,
} from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Books() {
  const classes = useStyles();
  // const [{ bookGenre }, dispatch] = useStateValue();
  const [bookGenre, setBookGenre] = useState("");
  const [booksAll, setBooksAll] = useState([]);
  const [books, setBooks] = useState([]);
  // console.log("here at books:" + bookGenre);

  useEffect(() => {
    // bookGenre == "all"
    //   ? db
    //       .collection("books")
    //       // .where("bookGenre", "==", categ)
    //       .orderBy("timestamp", "asc")
    //       .onSnapshot((snapshot) => {
    //         setBooks(
    //           snapshot.docs.map((doc) => ({
    //             id: doc.id,
    //             bookName: doc.data().bookName,
    //             author: doc.data().author,
    //             bookImage: doc.data().bookImage,
    //             bookDesc: doc.data().bookDesc,
    //             bookCopies: doc.data().bookCopies,
    //             bookGenre: doc.data().bookGenre,
    //           }))
    //         );
    //       })
    //   : db
    //       .collection("books")
    //       .where("bookGenre", "==", bookGenre)
    //       .orderBy("timestamp", "asc")
    //       .onSnapshot((snapshot) => {
    //         setBooks(
    //           snapshot.docs.map((doc) => ({
    //             id: doc.id,
    //             bookName: doc.data().bookName,
    //             author: doc.data().author,
    //             bookImage: doc.data().bookImage,
    //             bookDesc: doc.data().bookDesc,
    //             bookCopies: doc.data().bookCopies,
    //             bookGenre: doc.data().bookGenre,
    //           }))
    //         );
    //       });
    db.collection("books")
      // .where("bookGenre", "==", categ)
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setBooksAll(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            bookName: doc.data().bookName,
            author: doc.data().author,
            bookImage: doc.data().bookImage,
            bookDesc: doc.data().bookDesc,
            bookCopies: doc.data().bookCopies,
            bookGenre: doc.data().bookGenre,
          }))
        );
        setBooks(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            bookName: doc.data().bookName,
            author: doc.data().author,
            bookImage: doc.data().bookImage,
            bookDesc: doc.data().bookDesc,
            bookCopies: doc.data().bookCopies,
            bookGenre: doc.data().bookGenre,
          }))
        );
      });
  }, []);

  let location = useLocation();
  const filterBasedOnGenre = (event) => {
    event.preventDefault();
    setBooks(
      booksAll.filter((x) =>
        bookGenre == "All" ? true : x.bookGenre == bookGenre
      )
    );
    // alert("Here is the filtered content based on " + bookGenre);
  };

  return (
    <div>
      <Header />
      <div className="books__genreselectform">
        <form className="books__genreselectform_list">
          <FormControl className={classes.formControl}>
            <InputLabel>Book Genre</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={bookGenre}
              onChange={(event) => {
                // console.log("genre:" + event.target.value);
                setBookGenre(event.target.value);
              }}
            >
              <MenuItem value={"All"}>All</MenuItem>
              <MenuItem value={"Science Fiction"}>Science Fiction</MenuItem>
              <MenuItem value={"Thriller"}>Thriller</MenuItem>
              <MenuItem value={"children"}>Children's book</MenuItem>
              <MenuItem value={"Horror"}>Horror</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            disabled={!bookGenre}
            color="primary"
            type="submit"
            onClick={filterBasedOnGenre}
          >
            Filter
          </Button>
        </form>
      </div>
      {books.map((book, ind) => {
        if (ind % 3 == 0 && books.length > ind + 2)
          return (
            <div className={"books__bookrow"}>
              <BookOne
                id={books[ind].id}
                bookImage={books[ind].bookImage}
                bookDesc={books[ind].bookDesc}
                bookName={books[ind].bookName}
                author={books[ind].author}
                bookCopies={books[ind].bookCopies}
                bookGenre={books[ind].bookGenre}
                detailed={false}
              />
              <BookOne
                id={books[ind + 1].id}
                bookImage={books[ind + 1].bookImage}
                bookDesc={books[ind + 1].bookDesc}
                bookName={books[ind + 1].bookName}
                author={books[ind + 1].author}
                bookCopies={books[ind + 1].bookCopies}
                bookGenre={books[ind + 1].bookGenre}
                detailed={false}
              />
              <BookOne
                id={books[ind + 2].id}
                bookImage={books[ind + 2].bookImage}
                bookDesc={books[ind + 2].bookDesc}
                bookName={books[ind + 2].bookName}
                author={books[ind + 2].author}
                bookCopies={books[ind + 2].bookCopies}
                bookGenre={books[ind + 2].bookGenre}
                detailed={false}
              />
            </div>
          );
      })}
      {books.length % 3 == 1 ? (
        <div className={"books__bookrow"}>
          <BookOne
            id={books[books.length - 1].id}
            bookImage={books[books.length - 1].bookImage}
            bookDesc={books[books.length - 1].bookDesc}
            bookName={books[books.length - 1].bookName}
            author={books[books.length - 1].author}
            bookCopies={books[books.length - 1].bookCopies}
            bookGenre={books[books.length - 1].bookGenre}
            detailed={false}
          />
        </div>
      ) : books.length % 3 == 2 ? (
        <div className={"books__bookrow"}>
          <BookOne
            id={books[books.length - 2].id}
            bookImage={books[books.length - 2].bookImage}
            bookDesc={books[books.length - 2].bookDesc}
            bookName={books[books.length - 2].bookName}
            author={books[books.length - 2].author}
            bookCopies={books[books.length - 2].bookCopies}
            bookGenre={books[books.length - 2].bookGenre}
            detailed={false}
          />
          <BookOne
            id={books[books.length - 1].id}
            bookImage={books[books.length - 1].bookImage}
            bookDesc={books[books.length - 1].bookDesc}
            bookName={books[books.length - 1].bookName}
            author={books[books.length - 1].author}
            bookCopies={books[books.length - 1].bookCopies}
            bookGenre={books[books.length - 1].bookGenre}
            detailed={false}
          />
        </div>
      ) : null}
    </div>
  );
}

export default Books;
