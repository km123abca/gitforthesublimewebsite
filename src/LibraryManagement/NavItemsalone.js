import React, { useState } from "react";
import "./NavItemsalone.css";

function NavItemsalone(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className={"navItemssalone__nav-item " + props.className}>
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.menutitle}
      </a>

      {open && props.children}
    </li>
  );
}

export default NavItemsalone;
