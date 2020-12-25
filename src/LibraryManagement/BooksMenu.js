import React, { useState } from "react";
import "./BooksMenu.css";

function BooksMenu(props) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <li className={"booksMenu__nav-item "}>
        <a
          href="#"
          className="booksMenu__icon-button"
          onClick={() => setOpen(!open)}
        >
          {props.menutitle}
        </a>

        {open && props.children}
      </li>
    </div>
  );
}

export default BooksMenu;
