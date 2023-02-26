/* eslint-disable jsx-a11y/anchor-is-valid */
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import logo from "../logo/Spotify_Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SEARCH_RESULT } from "../redux/action/ActionIndex";
import { useState } from "react";

const MyNavBar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch({
      type: SEARCH_RESULT,
      payload: search,
    });
    navigate("/SearchResults");
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Navbar bg="navbar" variant="white" expand="md" fixed="left">
      <Navbar.Brand href="index.html">
        <Link to={"/"}>
          {" "}
          <img src={logo} alt="Spotify_Logo" width={131} height={40} />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
      <Navbar.Collapse id="navbarNavAltMarkup">
        <Nav className="mr-auto d-block">
          <Link to={"/"}>
            <FontAwesomeIcon icon={faHome} size="lg" /> Home
          </Link>
          <Nav>
            <Link to={"/Favourite"}>
              <FontAwesomeIcon icon={faBookOpen} size="lg" /> Your Library
            </Link>
          </Nav>
        </Nav>
        <Form className="input-group" onSubmit={handleSearch}>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            id="searchField"
            value={search}
            onChange={handleInputChange}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                handleSearch(e);
              }
            }}
          />
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={handleSearch}
            id="button-addon1"
          >
            GO
          </Button>
        </Form>
      </Navbar.Collapse>
      <div className="nav-btn">
        <Button className="signup-btn" variant="primary">
          Sign Up
        </Button>
        <Button className="login-btn" variant="outline-primary">
          Login
        </Button>
        <a href="#">Cookie Policy</a> | <a href="#">Privacy</a>
      </div>
    </Navbar>
  );
};

export default MyNavBar;
