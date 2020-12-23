import "./Books.css";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import BookOne from "./BookOne";
import "./Books.css";
import db from "../firebase";
import firebase from "firebase";

function Books() {
  useEffect(() => {
    db.collection("books")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setBooks(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            bookName: doc.data().bookName,
            author: doc.data().author,
            bookImage: doc.data().bookImage,
            bookDesc: doc.data().bookDesc,
          }))
        );
      });
  }, []);
  const [books, setBooks] = useState([]);
  return (
    <div>
      <Header />
      {/* <div className="books__bookrow">
        <BookOne imgsrc="/bookimages/b1.jpg" bookdesc="A Great book to read" />
        <BookOne imgsrc="/bookimages/b2.jpg" bookdesc="A Must read book" />
        <BookOne
          imgsrc="/bookimages/b1.jpg"
          bookdesc="A Michael Crichton book that you dont wanna miss"
        />
      </div> */}
      {books.map((book, ind) => {
        if (ind % 3 == 0 && books.length > ind + 2)
          return (
            <div className={"books__bookrow"}>
              <BookOne
                imgsrc={books[ind].bookImage}
                bookdesc={books[ind].bookDesc}
              />
              <BookOne
                imgsrc={books[ind + 1].bookImage}
                bookdesc={books[ind + 1].bookDesc}
              />
              <BookOne
                imgsrc={books[ind + 2].bookImage}
                bookdesc={books[ind + 2].bookDesc}
              />
            </div>
          );
      })}
      {books.length % 3 == 1 ? (
        <div className={"books__bookrow"}>
          <BookOne
            imgsrc={books[books.length - 1].bookImage}
            bookdesc={books[books.length - 1].bookDesc}
          />
        </div>
      ) : books.length % 3 == 2 ? (
        <div className={"books__bookrow"}>
          <BookOne
            imgsrc={books[books.length - 2].bookImage}
            bookdesc={books[books.length - 2].bookDesc}
          />
          <BookOne
            imgsrc={books[books.length - 1].bookImage}
            bookdesc={books[books.length - 1].bookDesc}
          />
        </div>
      ) : null}
    </div>
  );
}

export default Books;
