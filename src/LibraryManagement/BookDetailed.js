import React, { useState } from "react";
import "./BookDetailed.css";
import { useLocation } from "react-router-dom";
import BookOne from "./BookOne";
import Header from "./Header";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  List,
} from "@material-ui/core";
import Dummy from "./Dummy";
function BookDetailed() {
  let location = useLocation();
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
  const [forumMessage, setForumMessage] = useState("");
  const SendMessage = () => {
    console.log("ok");
  };
  return (
    <div className="bookDetailed">
      <Header />
      <div className="bookDetailed__body">
        <div className="bookDetailed__bookcontainer">
          <BookOne
            id={bid}
            bookImage={bookImage}
            bookDesc={bookDesc}
            bookName={bookName}
            author={author}
            bookCopies={bookCopies}
            bookGenre={bookGenre}
            detailed={true}
          />
        </div>

        <div className="bookDetailed__chatWindow">
          <form className="bookDetailed__chatform">
            <FormControl className="bookDetailed__chatInput">
              <InputLabel>Message:</InputLabel>
              <Input
                value={forumMessage}
                placeholder="Your Thoughts on this book"
                onChange={(event) => {
                  setForumMessage(event.target.value);
                }}
              />
            </FormControl>
            <Button
              variant="contained"
              disabled={!forumMessage}
              color="primary"
              type="submit"
              onClick={SendMessage}
            >
              Post
            </Button>
          </form>
          {/* The chat data from database */}
          <div className="bookDetailed__groupOfChats">
            <div className="bookDetailed__indiChat">
              <div className="bookDetailed__indiChatTop">
                <div className="bookDetailed__indiChatTopContent">
                  23/2/2016
                </div>
                <div className="bookDetailed__indiChatTopContent">
                  Rani Singh
                </div>
              </div>
              <div className="bookDetailed__indiChatMiddle">
                Great book to read
              </div>
            </div>
          </div>
          {/* chat data from database ends */}
        </div>
      </div>
    </div>
  );
}

export default BookDetailed;
