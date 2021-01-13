import React from "react";
import { CSSTransition } from "react-transition-group";
import "./CssTrans.css";
import DropdownItemsalone from "./DropdownItemsalone";
import { useHistory } from "react-router-dom";
// menuClassName=menu-primary
// thisMenu=main
function CssTrans({
  activeMenu,
  setActiveMenu,
  thisMenu,
  menuClassName,
  dropdownstuff,
  setMenuHeight,
}) {
  const history = useHistory();
  function calcHeight(e) {
    const height = e.offsetHeight;
    setMenuHeight(height);
  }

  return (
    <CSSTransition
      in={activeMenu == thisMenu}
      timeout={500}
      classNames={menuClassName}
      unmountOnExit
      onEnter={calcHeight}
    >
      <div className="cssTrans__menu">
        {dropdownstuff.map((item, ind) => (
          <DropdownItemsalone
            goToMenu={item.goToMenu ? item.goToMenu : ""}
            setActiveMenu={setActiveMenu}
          >
            {item.link ? (
              <a href="#" onClick={() => history.push(item.link)}>
                {/* history.push({ pathname: item.link })}> */}
                {item.name}
              </a>
            ) : (
              item.name
            )}
          </DropdownItemsalone>
        ))}
      </div>
    </CSSTransition>
  );
}

export default CssTrans;
