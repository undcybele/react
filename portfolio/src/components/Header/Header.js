import React from "react";
import { Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import {
  HomeRounded,
  SchoolRounded,
  WorkRounded,
  Facebook,
  LinkedIn,
  GitHub,
} from "@material-ui/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink, withRouter } from "react-router-dom";
import Button from "../Button/Button";

const Header = (props) => {
  const pathName = props?.location?.pathname;
  return (
    <Navbar expand="lg" sticky="top" className="header">
      <Nav.Link as={NavLink} to="/">
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName === "/" ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>

          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              pathName === "/portfolio" ? "header_link_active" : "header_link"
            }
          >
            Portfolio
          </Nav.Link>
        </Nav>
        <div className="header_rigth">
          <Facebook />
          <LinkedIn />
          <GitHub />
          <Button text="Contact me" />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
