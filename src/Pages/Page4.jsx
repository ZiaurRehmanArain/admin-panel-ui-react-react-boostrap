import React from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import './Style/Page4.css'

function Page4() {
    return <>
    {/* User Detial section  */}
        <section>
            <Container>
                <div className="text-start  mt-2  ">
                    <span className="h4 fw-bold ">User : </span>
                    <span className="h4 fw-bold text-danger ">
                        Username
                    </span>

                </div>
            </Container>

            <section>
              <Container className=" ">
              <Row>
                    <Col lg={4} className="ps-3 pe-1">
                        <Container className="p-2 border-1 border-black border">
                            <h3 className="text-start h3">
                                User Detial
                            </h3>
                            <Form >
                                <Row>
                                    <Col lg={6} className=" ">
                                        <Form.Group as={Col} className="text-start">
                                            <Form.Label className="fw-bold ">First Name *</Form.Label>
                                            <Form.Control required type="text" placeholder="" className="bg-gray focus-grey rounded-0" />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} className=" ">

                                        <Form.Group as={Col} className="text-start ">
                                            <Form.Label className="fw-bold ">First Name *</Form.Label>
                                            <Form.Control required type="text" placeholder="" className="bg-gray focus-grey rounded-0" />
                                        </Form.Group>
                                    </Col>

                                </Row>


                                <Row>
                                    <Col lg={12} className=" ">

                                        <Form.Group as={Col} className="text-start">
                                            <Form.Label className="fw-bold ">Phone Number </Form.Label>
                                            <Form.Control required type="text" placeholder="" className="bg-gray focus-grey rounded-0" />
                                        </Form.Group>
                                    </Col>


                                </Row>


                                <Row>
                                    <Col lg={6} className=" ">

                                        <Form.Group as={Col} className="text-start">
                                            <Form.Label className="fw-bold ">Messager</Form.Label>
                                            <Form.Select required type="text" placeholder="" className="bg-gray focus-grey rounded-0" >

                                                <option>Open this </option>
                                                <option value="1">Skype</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} className=" ">

                                        <Form.Group as={Col} className="text-start ">
                                            <Form.Label className="fw-bold ">Username or phone....</Form.Label>
                                            <Form.Control  type="text" placeholder="" className="bg-gray focus-grey rounded-0" />
                                        </Form.Group>
                                    </Col>

                                </Row>
                                <p className="pt-2">
                                    to edit contact detial,please contact your manager
                                </p>

                                <Row>
                                    <Col lg={6} className=" mt-0 pt-0 ">

                                        <Form.Group as={Col} className="text-start">
                                            <Form.Label className="fw-bold ">country</Form.Label>
                                            <Form.Select  type="text" placeholder="" className=" focus-white bg-white rounded-0">

                                                <option>Open this </option>
                                                <option value="Skype">Skype</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} className=" ">

                                        <Form.Group as={Col} className="text-start ">
                                            <Form.Label className="fw-bold ">Notificattion langauge</Form.Label>
                                            <Form.Select  type="text" placeholder="" className="focus-white bg-white  rounded-0">

                                                <option>Select langauge </option>
                                                <option value="ENG">ENG</option>
                                                <option value="URDU">URDU</option>
                                                <option value="Arabic">Arabic</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col>
                                        <Button type="submit" className="rounded-pill text-light bg-warning py-2 mt-4 cursor-pointer w-full border-0">
                                            SAVE CHANGE

                                        </Button>

                                    </Col>
                                </Row>
                            </Form>
                        </Container>
                    </Col>



                    
        {/* Detail  */}


        <Col lg={4} className="px-1">
                        <Container className="p-2 border-1 border-black border h-100 text-start">
                            <h3 className="text-start h3">
                                Detial
                            </h3>
                            <p>
                                Detial
                            </p>
                          
                        </Container>
                    </Col>


                {/* Password section  */}

                <Col lg={4} className="px-1 pe-3">
                        <Container className="p-2 border-1 border-black border h-100 text-start">
                            <h3 className="text-start h3">
                               Change Password
                            </h3>

                            <Form >


                                
                            <Row>
                                    <Col lg={12} className=" ">

                                        <Form.Group as={Col} className="text-start">
                                            <Form.Label className="fw-bold ">Old Password</Form.Label>
                                            <Form.Control required type="text" placeholder="" className="bg-white focus-white rounded-0 border-2 border" />
                                        </Form.Group>
                                    </Col>


                                </Row>
                                <Row>
                                    <Col lg={6} className=" ">
                                        <Form.Group as={Col} className="text-start">
                                            <Form.Label className="fw-bold ">New Password</Form.Label>
                                            <Form.Control required type="text" placeholder="" className="bg-white focus-white rounded-0 border-2 border" />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} className=" ">

                                        <Form.Group as={Col} className="text-start ">
                                            <Form.Label className="fw-bold ">Repeat new Password</Form.Label>
                                            <Form.Control required type="text" placeholder="" className="bg-white focus-white rounded-0 border-2 border" />
                                        </Form.Group>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col>
                                        <Button type="submit" className="rounded-pill text-light bg-warning py-2 my-4 cursor-pointer w-full border-0">
                                            CHANGE PASSWORD

                                        </Button>

                                    </Col>
                                </Row>


                                </Form>
                          
                          
                        </Container>
                    </Col>

                    <Col>
                    </Col>                </Row>

                    <Row>
                         {/* subscription detial  */}
                    <Col lg={4} className="px-1 ps-3 pt-2">
                        <Container className="p-2 border-1 border-black border h-100 text-start">
                            <h3 className="fw-bold h3">
                                Subscription
                            </h3>
                            <p className="text-center fw-bold h3 py-4">
                                No Information
                            </p>
                          
                        </Container>
                    </Col>


                    <Col lg={4} className="px-1  pt-2">
                        <Container className="p-2 border-1 border-black border h-100 text-start">
                            <h3 className="fw-bold h3">
                                Manage two factor authentication
                            </h3>
                            <p className="">
                              Google Authenticator enable No
                            </p>
                            <Row>
                                    <Col>
                                        <Button type="submit" className="rounded-pill text-light bg-warning py-2 cursor-pointer w-full border-0">
                                                Enable

                                        </Button>

                                    </Col>
                                </Row>
                          
                        </Container>
                    </Col>


                    </Row>


              </Container>

            </section>
        </section>







    </>;
}

export default Page4;
