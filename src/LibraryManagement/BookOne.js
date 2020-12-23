import React from "react";
import "./BookOne.css";
import { Button } from "@material-ui/core";
function BookOne({ imgsrc, bookdesc }) {
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
      </div>
    </div>
  );
}

export default BookOne;
