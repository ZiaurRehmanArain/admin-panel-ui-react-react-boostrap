import React from "react";
import { FaDollarSign } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa";
import { BsLightningFill } from "react-icons/bs";
import { VscGraph } from "react-icons/vsc";
import { SlCalender } from "react-icons/sl";

// import TwoDropdowns from "./TwoDropDown";
// import LineCharts from "./LineChart";
// import Footer from "./Footer";
// import Table from "./Table";
// import TableComponent from "./Tables";
import { Container, Row, Col, Card, Form, Dropdown, DropdownButton } from 'react-bootstrap';
import './MainContents.css'

import TableComponent from "../Table/Table";
import Footer from "../Footer/Footer";
import LineCharts from "../LineChart/LineChart";
import {CustomBRDropDown, CustomGreyDropDown, CustomLBDropDown} from "../DropDowns/CustomDropDown";
import CusttomButton from "../Button/CusttomButton";



// import { Container, Row, Col, Button, Dropdown, DropdownButton } from 'react-bootstrap';

function MainContent() {

    const columns = React.useMemo(
        () => [
            {
                Header: 'Currency',
                accessor: 'Currency', // accessor is the "key" in the data
            },
            {
                Header: 'Date',
                accessor: 'Date',
            },
            {
                Header: 'Item1',
                accessor: 'Item1',
            },
            {
                Header: 'Item2',
                accessor: 'Item2',
            },
            {
                Header: 'Item3',
                accessor: 'Item3',
            },
            {
                Header: 'Status',
                accessor: 'Status',
            },
        ],
        []
    );

    const data = React.useMemo(
        () => [

        ],
        []
    );


    let timeIntrevalData=[
        {name :"1 month",
            value:"1 month"
        },
        {name :"1 month",
            value:"1 month"
        }
    ]
    let currencyData=[
        {name :"USD",
            value:"USD"
        },
        {name :"PAK",
            value:"PAK"
        }
    ]
    let daysData=[
        {name :"Yesterday",
            value:"Yesterdata"
        },
        {name :"today",
            value:"today"
        }
    ]
    let itemsData=[
        {name :"item 1",
            value:"item 1"
        },
        {name :"item 2",
            value:"item 2"
        }
    ]

    return (
        <>
            <section>
                <Container className="pt-4">
                    <Row className="mx-2 ">
                        <Col lg={2} md={4} sm={6} xs={12} className="mb-3 border-bottom  ">
                            <Card className="border-0 m-0">
                                <Card.Body>
                                    <div className="text-color1 d-flex justify-content-center align-items-center">
                                        <FaDollarSign size={28} />
                                        <span className="font-weight-bold h2 ">0</span>
                                    </div>
                                    <div className="text-color1 d-flex justify-content-center align-items-center">
                                        <FaCcMastercard size={22} />
                                        <span className="font-weight-bold h4 ml-2 ps-1">ITEM</span>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={2} md={4} sm={6} xs={12} className="mb-3 border-bottom1">

                            <Card className="border-0 m-0">
                                <Card.Body>
                                    <div className="text-color2 d-flex justify-content-center align-items-center">
                                        <FaDollarSign size={28} />
                                        <span className="font-weight-bold h2 ">0</span>
                                    </div>
                                    <div className="text-color2 d-flex justify-content-center align-items-center">
                                        <BsLightningFill size={22} />
                                        <span className="font-weight-bold h4 ml-2 ps-1">YESTERDAY</span>
                                    </div>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col lg={2} md={4} sm={6} xs={12} className="mb-3 border-bottom2">

                            <Card className="border-0 m-0">
                                <Card.Body>
                                    <div className="text-color3 d-flex justify-content-center align-items-center">
                                        <FaDollarSign size={28} />
                                        <span className="font-weight-bold h2 ">0</span>
                                    </div>
                                    <div className="text-color3 d-flex justify-content-center align-items-center">
                                        <VscGraph size={22} />
                                        <span className="font-weight-bold h4 ml-2 ps-1">CURRENT MONTH</span>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={2} md={4} sm={6} xs={12} className="mb-3 border-bottom3">
                            <Card className="border-0 m-0">
                                <Card.Body>
                                    <div className="text-color4 d-flex justify-content-center align-items-center">
                                        <FaDollarSign size={28} />
                                        <span className="font-weight-bold h2 ">0</span>
                                    </div>
                                    <div className="text-color4 d-flex justify-content-center align-items-center">
                                        <SlCalender size={22} />
                                        <span className="font-weight-bold h4 ml-2 ps-1">30 Days</span>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={2} md={4} sm={6} xs={12} className="mb-3 border-bottom4">

                            <Card className="border-0 m-0">
                                <Card.Body>
                                    <div className="text-color5 d-flex justify-content-center align-items-center">
                                        <FaDollarSign size={28} />
                                        <span className="font-weight-bold h2 ">0</span>
                                    </div>
                                    <div className="text-color5 d-flex justify-content-center align-items-center">
                                        <FaCcMastercard size={22} />
                                        <span className="font-weight-bold h4 ml-2 ps-1">ITEM</span>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

        <section className="ps-3">

            <Row>
        <Col xs={5} sm={4} md={3} lg={2}>
        <CustomLBDropDown label="Time Innterval" placeholder="select Time" data={timeIntrevalData} onChange={(v)=>{console.log(v)}}/>
        </Col>
        <Col xs={5} sm={4} md={3} lg={2}>
        <CustomLBDropDown label="Currency" placeholder="select Currency" data={currencyData} onChange={(v)=>{console.log(v)}}/>
        
        </Col>
        <Col xs={5} sm={4} md={3} lg={1}>
        <CusttomButton title="Apply" onClick={()=>console.log('click')}/>
        </Col>

            </Row>
        </section>

        {/* Line char section  here */}

       <section className=" mx-3 mt-2 border border-start-2 border-bottom-2 border-top-0 border-end-0 py-2">

       <Row className="justify-content-between">   
            <Col xs={12} sm={12} md={12} lg={6} className="ml-5">
            <Container className="overflow-x-scroll">
                <h3 className="h3 text-center">
                    Sub Heading
                </h3>
                <div>
                    <LineCharts/>
                </div>

            </Container>
            </Col>

            <Col xs={12} sm={12} md={12} lg={6}>
            <Container className="overflow-x-scroll">
                <h3 className="h3 text-center">
                    Sub Heading
                </h3>
                <div>
                    <LineCharts/>
                </div>

            </Container>
            
            </Col>


            </Row>
       </section>

            <section>
                <Container className="mt-2 mb-4 ms-1">
                    <div className="border p-3">
                      <Row className="justify-content-between text-start">
                        <Col lg={2} md={3} sm={4} xs={5} className="">
                        <span>
                            Status Sumary
                            </span>

                        
                        </Col>
                        <Col lg={2} md={3} sm={4} xs={5} className="">
                       <CustomBRDropDown label="" placeholder="Yesterday" data={daysData} onChange={(v)=>{console.log(v)}}/>
                        </Col>
                      </Row>

                      <Row>
                        <Col lg={2} md={3} sm={4} xs={5} >
                        <CustomGreyDropDown label="" placeholder="Items Select" data={itemsData} onChange={(v)=>{console.log(v)}}/>
                        </Col>
                      </Row>
                        <Row className="mt-4">
              <TableComponent columns={columns} data={data} />
            </Row>
                    </div>
                </Container>
            </section>

            <Footer />
        </>
    );
}

export default MainContent;
