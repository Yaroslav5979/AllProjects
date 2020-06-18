import React from "react";
import c from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Friends from "../Friends/Friends";

const Navbar = (props) => {
  // let avaImg = props.avaImg.map((img) => {
  //   return <Friends img={img.avaImg} />;
  // });
  return (
    <nav className={c.nav}>
      <ul>
        <li className={c.item}>
          <NavLink to="/profile" activeClassName={c.activeLink}>
            Profile
          </NavLink>
        </li>
        <li className={c.item}>
          <NavLink to="/dialogs" activeClassName={c.activeLink}>
            Dialogs
          </NavLink>
        </li>
        <li className={c.item}>
          <NavLink to="/news" activeClassName={c.activeLink}>
            News
          </NavLink>
        </li>

        <li className={c.item}></li>
        <h3>Friends</h3>
        {/* {avaImg} */}
      </ul>
    </nav>
  );
};

export default Navbar;
