import React from "react";
import { reveal as Menu } from "react-burger-menu";

// Documentation:
// https://github.com/negomi/react-burger-menu

const SideBar = ({ pageWrapId, outerContainerId }) => {
  // This is done to allow for effects from the menu (sliding, pushing, etc.)
  const showSettings = e => {
    e.preventDefault();
  };

  return (
    <div>
      <Menu
        pageWrapId={pageWrapId}
        outerContainerId={outerContainerId}
        styles={styles}
        width={240}
      >
        <a id="adduser" className="menu-item" href="/">
          Add User
        </a>
        <br />

        <a id="deleteuser" className="menu-item" href="/">
          Delete User
        </a>

        <a id="deleteuser" className="menu-item" href="/">
          Edit User
        </a>
        <br />
      </Menu>
    </div>
  );
};

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "30px",
    top: "10px"
  },
  bmBurgerBars: {
    background: "#F0FFFF"
  },
  bmBurgerBarsHover: {
    background: "#a90000"
  },
  bmCrossButton: {
    height: "24px",
    width: "24px"
  },
  bmCross: {
    background: "#bdc3c7"
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%"
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em"
  },
  bmMorphShape: {
    fill: "#373a47"
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em"
  },
  bmItem: {
    display: "inline-block"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  }
};

export { SideBar };
