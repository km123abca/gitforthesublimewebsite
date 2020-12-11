import React, { useState, useEffect, useRef } from "react";
import CssTrans from "./CssTrans";
import "./DropdownMenusalone.css";

function DropdownMenusalone(props) {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);
  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);
  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  return (
    <div
      className={"dropdownMenusalone__dropdown " + props.className}
      // className={"dropdownMenusalone__dropdown"}
      style={{ height: menuHeight }}
      ref={dropdownRef}
    >
      <CssTrans
        setMenuHeight={setMenuHeight}
        setActiveMenu={setActiveMenu}
        activeMenu={activeMenu}
        thisMenu="main"
        menuClassName="menu-primary"
        dropdownstuff={[
          { name: "Home" },
          { name: "Books", goToMenu: "settings" },
          { name: "My Account", goToMenu: "accountfns" },
        ]}
      />
      <CssTrans
        setMenuHeight={setMenuHeight}
        setActiveMenu={setActiveMenu}
        activeMenu={activeMenu}
        thisMenu="settings"
        menuClassName="menu-secondary"
        dropdownstuff={[
          { name: "Back", goToMenu: "main" },
          { name: "View all" },
          { name: "View by category" },
          { name: "View by Author" },
        ]}
      />
      <CssTrans
        setMenuHeight={setMenuHeight}
        setActiveMenu={setActiveMenu}
        activeMenu={activeMenu}
        thisMenu="accountfns"
        menuClassName="menu-secondary"
        dropdownstuff={[
          { name: "Back", goToMenu: "main" },
          { name: "Login" },
          { name: "Register" },
          { name: "Members" },
        ]}
      />
    </div>
  );
}

export default DropdownMenusalone;
