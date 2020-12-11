import React from "react";
import "./Header.css";
import Dropdown from "./Dropdown";
import DropdownMenusalone from "./DropdownMenusalone";
import NavItemsalone from "./NavItemsalone";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__subjects header__largeScreen">Home</div>
        <div className="header__subjects header__largeScreen">Books</div>
        <div className="header__subjects header__largeScreen">My Account</div>
      </div>
      <div className="header__right">
        {/* <Dropdown className="header__smallScreen" /> */}
        <div className="header__subjects header__largeScreen">Contacts</div>
        <div className="header__subjects header__largeScreen">Contact</div>
        <NavItemsalone
          className="header__subjects header__smallScreen"
          menutitle="View"
        >
          <DropdownMenusalone className="" />
        </NavItemsalone>
      </div>
    </div>
  );
}

export default Header;
