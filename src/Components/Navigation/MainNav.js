import React, { useState } from "react";
import { Link } from "react-router-dom";
import Backdrop from "../UIElements/Backdrop";

import Header from "./Header";
import "./MainNav.css";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";

const MainNav = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  return (
    <>
      {drawerIsOpen && <Backdrop onClick={() => setDrawerIsOpen(false)} />}
      <SideDrawer show={drawerIsOpen} onClick={() => setDrawerIsOpen(false)}>
        <nav className="drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <Header className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <h2 className="col-span-1 menu-title">
          <Link to="/">MovieDB</Link>
        </h2>
        <button
          className="col-span-1 menu-button"
          onClick={() => setDrawerIsOpen(true)}
        >
          <span className="span-1 bg-white block" />
          <span className="span-2 bg-white block" />
          <span className="span-3 bg-white block" />
        </button>
        <nav className="col-span-0 font-bold uppercase text-white md:col-span-1 hidden md:block">
          <NavLinks />
        </nav>
      </Header>
    </>
  );
};

export default MainNav;
