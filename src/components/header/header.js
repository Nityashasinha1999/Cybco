/** @format */

import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, NavItem, Input, Container } from "reactstrap";
// import openIcon from "../assets/images/icons/hamburger.png";
// import logo from "../assets/images/logo.png";
// import close from "../assets/images/icons/close.svg";
import Fade from "react-reveal/Fade";

const Header = (props) => {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let x = ["sticky-wrapper"];
  if (scrolled) {
    x.push(" sticky");
  }

  const [active, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!active);
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggle = (event) => {
    document.body.classList.toggle("modal-open");
    setIsOpen(!isOpen);
  };

  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      {/* <div
        className={`sticky-wrapper${isSticky ? " sticky" : "stick"}`}
        ref={ref}> */}
      <div className={x.join(" ")}>
        <Navbar className='d-none-mob'>
          <Container>
            <NavLink to='/'>
              {/* <img src={logo} alt='logo' /> */}
              <p>Logo</p>
            </NavLink>

            <div className='searchBarWrap'>
              <Input type='text' placeholder='Search' className='searchBar' />
            </div>
            <div className='navFlex'>
              <NavItem>
                <NavLink
                  exact
                  to='/'
                  className='headerLink'
                  activeClassName='active'>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  exact
                  to='/services'
                  className='headerLink'
                  activeClassName='active'>
                  Services
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  exact
                  to='/gallery'
                  className='headerLink'
                  activeClassName='active'>
                  Gallery
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  exact
                  to='/contact-us'
                  className='headerLink'
                  activeClassName='active'>
                  Contact Us
                </NavLink>
              </NavItem>
            </div>
          </Container>
        </Navbar>
      </div>
      <div
        className={`d-none-desk sticky-wrapper${isSticky ? " sticky" : ""}`}
        ref={ref}>
        <div className='mobNav'>
          <div className='wrapNav'>
            <div className='logoMobBlk'>
              <NavLink to='/'>
                {/* <img src={logo} alt='logo' className='logo' /> */}
                <p>Logo</p>
              </NavLink>
            </div>
            <div className='searchBarWrap'>
              <Input type='text' placeholder='Search' className='searchBar' />
            </div>
            {/* <img
              src={openIcon}
              alt='nav'
              onClick={toggle}
              className={isOpen ? "d-none ham" : "d-block"}
            /> */}
            {/* <img
              src={close}
              alt='nav'
              onClick={toggle}
              className={!isOpen ? "d-none ham" : "d-block"}
            /> */}
          </div>
          <div className={isOpen ? "overlay-nav" : ""}></div>
          {!isOpen ? (
            <p></p>
          ) : (
            <Fade left>
              <div className={isOpen ? "nav-menu active" : "nav-menu"}>
                <div className='closeWrapNav'>
                  {/* <img
                    src={close}
                    alt='nav'
                    className='iconClose'
                    onClick={toggle}
                  /> */}
                </div>
                <Fade left>
                  <div className='navbarMobWrap'>
                    <NavLink
                      exact
                      to='/'
                      className='headerLink'
                      activeClassName='active'>
                      Home
                    </NavLink>

                    <NavItem>
                      <NavLink
                        exact
                        to='/services'
                        className='headerLink'
                        activeClassName='active'>
                        Services
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        exact
                        to='/gallery'
                        className='headerLink'
                        activeClassName='active'>
                        Gallery
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        exact
                        to='/contact-us'
                        className='headerLink'
                        activeClassName='active'>
                        Contact Us
                      </NavLink>
                    </NavItem>
                  </div>
                </Fade>
              </div>
            </Fade>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
