import React from "react";
import { IoMdMenu } from "react-icons/io";
import { FiRefreshCw } from "react-icons/fi";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { Navbar, Nav, Button, Container, Dropdown, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import { useLocation } from "react-router-dom";



function CustomNavbar({ setShow, show }) {
  let location=useLocation()
  // console.log();
  return (
    <Navbar className="main-navbar" variant="dark" expand="lg">
      <Container fluid className="d-flex justify-content-between">
        <div className="d-flex align-items-center cursor-pointer" onClick={() => setShow(!show)}>
          <IoMdMenu size={40} className="text-warning"/>
          <span className="pl-1  mt-2 title-height">{location.state}</span>
        </div>
        <Nav className="ml-auto d-flex align-items-center ">
          <Button variant="warning" className="d-flex align-items-center mr-2 rounded-pill me-2">
            <FiRefreshCw size={20} />
            <span className="ps-2">Refresh Start</span>
          </Button>
          <Dropdown alignRight>
            <Dropdown.Toggle  id="dropdown-basic" className="d-flex align-items-center bg-transparent border-0">
              <Image roundedCircle width="30" height="30" src="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" className="bg-secondary mr-2" />
              <span className="text-white ms-2 me-2">EN</span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">EN</Dropdown.Item>
              <Dropdown.Item href="#/action-2">FR</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown alignRight className="ml-3">
            <Dropdown.Toggle  id="dropdown-basic" className="d-flex align-items-center bg-transparent border-0">
             
              <span className="text-white">1212</span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
