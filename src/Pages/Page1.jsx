import React from "react";
import { CustomBorderDropDown, CustomGreyDropDown } from "../Components/DropDowns/CustomDropDown";
import { Col, Row, Container } from "react-bootstrap";
import CusttomButton from "../Components/Button/CusttomButton";
import CustomInputBorder from "../Components/Input/Input";
import TableComponent from "../Components/Table/Table";
import './Style/Page1.css'
import SwitchComponent from "../Components/SwitchComponent/SwitchComponent";

function Page1() {
  let itemsData = [
    {
      name: "item 1",
      value: "item 1"
    },
    {
      name: "item 2",
      value: "item 2"
    }
  ]
  let langaugeData = [
    {
      name: "English",
      value: "English"
    },
    {
      name: "Urdu",
      value: "Urdu"
    }
  ]



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






  return <>
    <Container className="mt-2">
      <Row className="align-items-center ps-3 ms">

        <Col lg={4} md={4} sm={4} xs={5} className="mx-0 px-0">
          <CustomInputBorder label="item" placeholder="placeholder" onChange={(v) => console.log(v)} />

        </Col>
        <Col lg={2} md={3} sm={4} xs={5} className="mx-0 pe-3">
          <CustomBorderDropDown label="item" placeholder="Value" data={itemsData} onChange={(v) => { console.log(v) }} />

        </Col>
        <Col lg={2} md={3} sm={4} xs={5} className="mx-0 px-0">

          <CustomBorderDropDown label="langauge" placeholder="ENG" data={langaugeData} onChange={(v) => { console.log(v) }} />


        </Col>
        <Col lg={1} md={3} sm={4} xs={5}>
          <div className="">

            <CusttomButton onClick={() => console.log('click')} title='Add' />
          </div>


        </Col>


      </Row>


      <section>
        <Container className="mt-4 mb-4 ms-1">
          <div className="border p-3">
            <Row className="justify-content-between text-start">
              <Col lg={3} md={4} sm={6} xs={6} className="ms-0 ps-0 ">
                <SwitchComponent onClick={(v) => console.log(v)} />


              </Col>

            </Row>

            <Row className="">
              <Col lg={2} md={3} sm={4} xs={5} >
                <CustomGreyDropDown label="" placeholder="Items Select" data={itemsData} onChange={(v) => { console.log(v) }} />
              </Col>
            </Row>
            <Row className="">
              <TableComponent columns={columns} data={data} />
            </Row>
          </div>
        </Container>
      </section>


    </Container>
  </>;
}

export default Page1;
