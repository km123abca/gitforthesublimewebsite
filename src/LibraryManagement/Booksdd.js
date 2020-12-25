import React, { useEffect, useRef, useState } from "react";
import "./Booksdd.css";

function Booksdd() {
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
          {dropdownstuff.map((item, ind) => (
            <DropdownItemsalone
              goToMenu={item.goToMenu ? item.goToMenu : ""}
              setActiveMenu={setActiveMenu}
            >
              {item.name}
            </DropdownItemsalone>
          ))}
        </div>
      </CSSTransition>
    </div>
  );
}

export default Booksdd;
