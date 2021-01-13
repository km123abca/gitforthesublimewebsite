import React, { useEffect, useRef, useState } from "react";
import "./Booksdd.css";
import { CSSTransition } from "react-transition-group";
import { useHistory, Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Booksdd() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);
  const [{ bookGenre }, dispatch] = useStateValue();
  const history = useHistory();
  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);
  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }
  return (
    <div
      className="booksdd__dropdown "
      style={{ height: menuHeight }}
      ref={dropdownRef}
    >
      <CSSTransition
        in={activeMenu == "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="cssTrans__menu">
          <a
            href="#"
            className="dropdownItemsalone__menu-item"
            onClick={() => {
              dispatch({
                type: "SET_GENRE",
                genre: "all",
              });
              history.push("/library/books");
            }}
          >
            View all
          </a>
          <a
            href="#"
            className="dropdownItemsalone__menu-item"
            onClick={() => setActiveMenu("categ")}
          >
            View by Category
          </a>
          <a href="#" className="dropdownItemsalone__menu-item">
            View by author
          </a>
          <a
            href="#"
            className="dropdownItemsalone__menu-item"
            onClick={() => history.push("/library/add")}
          >
            Add a New Book
          </a>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu == "categ"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="cssTrans__menu">
          <a
            href="#"
            className="dropdownItemsalone__menu-item"
            onClick={() => setActiveMenu("main")}
          >
            Back
          </a>
          <a
            href="#"
            className="dropdownItemsalone__menu-item"
            onClick={() => {
              dispatch({
                type: "SET_GENRE",
                genre: "children",
              });
              history.push("/library/books");
            }}
          >
            Children's book
          </a>
          <a href="#" className="dropdownItemsalone__menu-item">
            Thriller
          </a>
          <a href="#" className="dropdownItemsalone__menu-item">
            Horror
          </a>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Booksdd;
