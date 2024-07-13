import React from "react";
import { CustomBorderDropDown, CustomGreyDropDown } from "../Components/DropDowns/CustomDropDown";
import { Col, Row, Container } from "react-bootstrap";
import CusttomButton from "../Components/Button/CusttomButton";
import CustomInputBorder from "../Components/Input/Input";
import TableComponent from "../Components/Table/Table";
import './Style/Page6.css'
import SwitchComponent from "../Components/SwitchComponent/SwitchComponent";

function Page6() {
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

        <Col lg={3} md={4} sm={4} xs={5} className="mx-0 px-0">
        <CustomBorderDropDown label="Website " placeholder="Value" data={itemsData} onChange={(v) => { console.log(v) }} />
        </Col>
        <Col lg={2} md={3} sm={4} xs={5} className="mx-0 pe-3">
          <CustomBorderDropDown label="Currency" placeholder="Value" data={itemsData} onChange={(v) => { console.log(v) }} />

        </Col>
        <Col lg={4} md={6} sm={4} xs={5} className="mx-0 px-0">

          <CustomBorderDropDown label="Item" placeholder="ENG" data={langaugeData} onChange={(v) => { console.log(v) }} />


        </Col>
        <Col lg={1} md={3} sm={4} xs={5}>
          <div className="">

            <CusttomButton onClick={() => console.log('click')} title='Generate' />
          </div>


        </Col>


      </Row>


      <section>
        <Container className="mt-4 mb-4 ms-1">
          <div className="border p-3">
        
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

      <Row className="px-3">
      <Col lg={6} md={6} sm={12} xs={12} className="">
                        <Container className="p-2 border-1 text-secondary w-100 border-black border h-100 text-start border-color">
                            <h3 className="text-start h3">
                              Paragraph Heading
                            </h3>
                            <p>
                            Paragraph Heading
                            </p>
                          
                        </Container>
                    </Col>
      <Col lg={6} md={6} sm={12} xs={12} className="px-1">
                        <Container className="p-2 border-1 text-secondary w-100 border-black border h-100 text-start border-color">
                            <h3 className="text-start h3">
                            Paragraph Heading
                            </h3>
                            <p>
                            Paragraph Heading
                            </p>
                          
                        </Container>
                    </Col>
      </Row>


    </Container>
  </>;
}

export default Page6;
