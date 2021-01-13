import React from "react";
import "./Header.css";
import Dropdown from "./Dropdown";
import DropdownMenusalone from "./DropdownMenusalone";
import NavItemsalone from "./NavItemsalone";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import BooksMenu from "./BooksMenu";
import Booksdd from "./Booksdd";

function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__subjects header__largeScreen">
          <Link to="/library">Home</Link>
        </div>
        <div className="header__subjects header__largeScreen">My Account</div>
        <div className="header__subjects header__largeScreen">
          <BooksMenu menutitle="books">
            <Booksdd />{" "}
          </BooksMenu>
        </div>
      </div>
      <div className="header__right">
        {/* <Dropdown className="header__smallScreen" /> */}
        <div className="header__subjects header__largeScreen">Contacts</div>
        <div className="header__subjects header__largeScreen">
          Welcome {" " + user.email}
        </div>
        {user.email != "Guest" && (
          <div className="header__subjects header__largeScreen">
            <Link to="/library/logout">Logout</Link>
          </div>
        )}
        {user.email == "Guest" && (
          <div className="header__subjects header__largeScreen">
            <Link to="/library/login">Login</Link>
          </div>
        )}

        <NavItemsalone
          className="header__subjects header__smallScreen"
          menutitle="burger"
        >
          <DropdownMenusalone className="" />
        </NavItemsalone>
      </div>
    </div>
  );
}

export default Header;
