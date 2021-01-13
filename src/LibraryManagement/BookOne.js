import React, { useState } from "react";
import "./BookOne.css";
import db from "../firebase";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
// for modal
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
//for modal

function BookOne({
  id,
  bookImage,
  bookDesc,
  bookName,
  author,
  bookCopies,
  bookGenre,
  detailed,
}) {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [msg, setMsg] = useState("");
  const [stat, setStat] = useState(false);
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [numBookCopies, setNumBookCopies] = useState(0);

  const openModalFn = () => {
    setModalOpen(true);
  };
  const closeModalFn = () => {
    setModalOpen(false);
  };
  const handleAcceptance = () => {
    handleClose();

    if (numBookCopies != -1)
      setModalMessage(
        "You have rented the book, copies remaining:" + bookCopies
      );
    else setModalMessage("Sorry No copies available as of now");

    openModalFn();
  };
  const handleDenial = () => {
    handleClose();
    //todo
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let onbpress = () => {
    console.log("button was pressed");
  };
  let rentABook = () => {
    db.collection("books")
      .doc(id)
      .get()
      .then((data) => {
        let numCopies = parseInt(data.data().bookCopies);
        numCopies -= 1;
        if (numCopies < 0) numCopies = -1;
        setNumBookCopies(numCopies);
        setMsg("Are you sure you want to rent this book?");
        if (numCopies > -1) {
          //to do update database with the new number of copies
          db.collection("books")
            .doc(id)
            .set({ bookCopies: numCopies }, { merge: true });
        }
        handleClickOpen();
      });
  };
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Attention</h2>
      <p id="simple-modal-description">{modalMessage}</p>
    </div>
  );
  return (
    <div className="bookOne">
      {/* modal begins */}
      <Modal
        open={modalOpen}
        onClose={closeModalFn}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
      {/* modal ends */}
      {/* start of confirmation dialogue */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Attention!!!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {msg}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAcceptance} color="primary">
            Yes
          </Button>
          <Button onClick={handleDenial} color="primary" autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
      {/* end of confirmation dialogue */}
      <img src={bookImage} alt="no image provided" />
      <div className="bookOne__imgdesc">
        <div className="bookOne__actualdesc">{bookGenre}</div>
        <Button
          variant="contained"
          color="primary"
          onClick={rentABook}
          className="bookOne_imagedescbutton"
        >
          Rent
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={(event) => db.collection("books").doc(id).delete()}
          className="bookOne_imagedescbutton"
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="primary"
          className="bookOne_imagedescbutton"
        >
          <Link
            to={{
              pathname: "/library/edit/",
              state: {
                id,
                bookImage,
                bookDesc,
                bookName,
                author,
                bookCopies,
                bookGenre,
              },
            }}
          >
            Edit
          </Link>{" "}
        </Button>
        {!detailed && (
          <Button
            variant="contained"
            color="primary"
            className="bookOne_imagedescbutton"
          >
            <Link
              to={{
                pathname: "/library/detailed/",
                state: {
                  id,
                  bookImage,
                  bookDesc,
                  bookName,
                  author,
                  bookCopies,
                  bookGenre,
                },
              }}
            >
              More
            </Link>{" "}
          </Button>
        )}
      </div>
    </div>
  );
}

export default BookOne;
