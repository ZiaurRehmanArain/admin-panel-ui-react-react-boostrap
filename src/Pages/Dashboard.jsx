import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from '../Components/Sidebar/Sidebar';
import CustomNavbar from '../Components/Navbar/Navbar';
import MainContent from '../Components/MainContent/MainContent';
import Page4 from './Page4';
import Page3 from './Page3';
import Navigtions from '../Config/Navigations';


const Dashboard = () => {
  const [show, setShow] = useState(false);

  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col lg={2} className={`bg-primary text-white p-0 ${show ? 'd-block' : 'd-none d-lg-block'} position-relative`} style={{ zIndex: 1020 }}>
          <SideBar setShow={setShow} />
        
        </Col>
        
        {/* Main content area */}
        <Col lg={10} className="p-0">
          {/* Navbar */}
          <header className="bg-white shadow">
            <CustomNavbar setShow={setShow} show={show} />
          </header>
          
          {/* Main content */}
          <main className="mb-0">
           <Navigtions/>
          </main>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
