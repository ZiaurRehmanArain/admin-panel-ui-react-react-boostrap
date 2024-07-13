import React from 'react';
import { FaHome, FaDollarSign, FaCcMastercard, FaEnvelope, FaShareSquare } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import { VscGraph } from "react-icons/vsc";
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css'
import { BsGraphUp } from "react-icons/bs";


function SideBar({ setShow }) {
  return (
    <Navbar   className="flex-column  position-fixed bg-color align-items-start" >
      {/* Sidebar content */}
      <Navbar.Brand className="text-white mb-4 text-center ">
        <h2 className="h5 ">Logo</h2>
        <Button variant="outline-light" size="sm" className="d-lg-none" onClick={() => setShow(false)}>Close</Button>
      </Navbar.Brand>
      <Nav className="flex-column w-100 text-start mx-0 ">
        <Nav.Item className=" text-white p-2 slidebar-heading">
          Main Menu
        </Nav.Item>
        <NavLink to="/" state={'Main Page'} className="text-white d-flex align-items-center p-2 slidebar-items">
          <FaHome size={22} />
          <span className="pl-2">Main Home</span>
        </NavLink>
         <NavLink  to="/page1" state={'Heading'} className="text-white d-flex align-items-center p-2 slidebar-items">
          <FaHome size={22} />
          <span className="pl-2">Page 1</span>
        </NavLink>
        <NavLink  to="/page2"  state={'Page 2'}className="text-white d-flex align-items-center p-2 slidebar-items">
          <FaDollarSign size={22} />
          <span className="pl-2">Page 2</span>
        </NavLink>
        <NavLink  to="/page3" state={'Page 3'} className="text-white d-flex align-items-center p-2 slidebar-items">
          <FaCcMastercard size={22} />
          <span className="pl-2">Page 3</span>
        </NavLink>
        <NavLink  to="/page4" state={'Page 4'}  className="text-white d-flex align-items-center p-2 slidebar-items ">
          <IoPersonSharp size={22} />
          <span className="pl-2">Page 4</span>
        </NavLink>
        <NavLink  to="/" state={'Main Page'}  className="text-white d-flex align-items-center p-2 slidebar-items">
          <FaEnvelope size={22} />
          <span className="pl-2">Menu</span>
        </NavLink>
        <Nav.Item className="bg-dark text-white p-2 slidebar-heading">
          Main Home
        </Nav.Item>
        <NavLink  to="/page5" state={'Page 5'}  className="text-white d-flex align-items-center p-2 slidebar-items">
          <FaShareSquare size={22} />
          <span className="pl-2">Page 5</span>
        </NavLink>
        <NavLink  to="/page6" state={'Page 6'}  className="text-white d-flex align-items-center p-2 slidebar-items">
          <HiOutlineAdjustmentsVertical size={22} />
          <span className="pl-2">Page 6</span>
        </NavLink>
        <NavLink  to="/page7" state={'Page 7'}  className="text-white d-flex align-items-center p-2 slidebar-items">
          <FaHome size={22} />
          <span className="pl-2">Page 7</span>
        </NavLink>
        <Nav.Item className="bg-dark text-white p-2 slidebar-heading">
          <FaHome size={22} />
          <span className="pl-2">Main Home</span>
        </Nav.Item>
        <NavLink  to="/page8" state={'Page 8'}  className="text-white d-flex align-items-center p-2 slidebar-items">
          <VscGraph size={22} />
          <span className="pl-2">Page 8</span>
        </NavLink>
        <NavLink  to="/page9" state={'Page 9'}  className="text-white d-flex align-items-center p-2 slidebar-items">
          <BsGraphUp size={22} />
          <span className="pl-2">Page 9</span>
        </NavLink>
        <NavLink  to="/" className="text-white d-flex align-items-center p-2 slidebar-items">
          <FaHome size={22} />
          <span className="pl-2">Menu</span>
        </NavLink> 
      </Nav>
    </Navbar>
  );
}

export default SideBar;
