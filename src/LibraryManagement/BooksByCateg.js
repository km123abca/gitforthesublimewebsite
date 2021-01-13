import "./BooksByCateg.css";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import BookOne from "./BookOne";
import "./Books.css";
import db from "../firebase";
import firebase from "firebase";
import { useLocation } from "react-router-dom";

function BooksByCateg() {
  useEffect(() => {
    db.collection("books")
      .where("bookGenre", "==", "children")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
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
  const [categ, setCateg] = useState(
    location.state ? location.state.categ : ""
  );
  return <div></div>;
}

export default BooksByCateg;
