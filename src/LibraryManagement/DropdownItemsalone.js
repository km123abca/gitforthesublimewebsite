import React from "react";
import "./DropdownItemsalone.css";

function DropdownItemsalone(props) {
  return (
    <a
      href="#"
      className="dropdownItemsalone__menu-item"
      onClick={() => props.goToMenu && props.setActiveMenu(props.goToMenu)}
    >
      {props.children}
    </a>
  );
}

export default DropdownItemsalone;
