import React, { useState } from "react";
import "./NavItemsalone.css";
import ListIcon from "@material-ui/icons/List";

function NavItemsalone(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className={"navItemssalone__nav-item " + props.className}>
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.menutitle == "burger" ? <ListIcon /> : props.menutitle}
      </a>

      {open && props.children}
    </li>
  );
}

export default NavItemsalone;
