import React from "react";
import "./BookOne.css";
import db from "../firebase";
import { Button } from "@material-ui/core";
function BookOne({ id, imgsrc, bookdesc }) {
  let onbpress = () => {
    console.log("button was pressed");
  };
  return (
    <div className="bookOne">
      <img src={imgsrc} alt="no image provided" />
      <div className="bookOne__imgdesc">
        <div className="bookOne__actualdesc">{bookdesc}</div>
        <Button
          variant="contained"
          color="primary"
          onClick={onbpress}
          className="bookOne_imagedescbutton"
        >
          Rent this Book
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={(event) => db.collection("books").doc(id).delete()}
          className="bookOne_imagedescbutton"
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default BookOne;
