import React,{useState} from "react";
import { CustomBorderDropDown, CustomGreenDropDown, CustomGreyDropDown } from "../Components/DropDowns/CustomDropDown";
import { Col, Row, Container,Form } from "react-bootstrap";
import CusttomButton from "../Components/Button/CusttomButton";
import CustomInputBorder from "../Components/Input/Input";
import './Style/Page9.css'
import { FaRegCalendarAlt } from "react-icons/fa";
import Datepicker from 'react-datepicker'; 
import "react-datepicker/dist/react-datepicker.css";
import TableComponent from "../Components/Table/Table";
import { FaArrowRight } from "react-icons/fa6";

function Page9() {
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
    let currencyData = [
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
    const [selectedDate, setSelectedDate] = useState(null);

const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log(date);
      };


let icons=()=><FaArrowRight />



    return <>
        <Container className="mt-2 ">
            <Row className="align-items-center ms-3">

                <Col lg={2} md={4} sm={4} xs={5} className="mx-0 ps-0 pe-3">
                    <CustomBorderDropDown label="Currency" placeholder="USD" data={currencyData} onChange={(v) => { console.log(v) }} />

                </Col>
                <Col lg={4} md={4} sm={4} xs={5} className="mx-0 px-0">

                    <CustomBorderDropDown label="Item" placeholder="Select" data={itemsData} onChange={(v) => { console.log(v) }} />


                </Col>
            
                <Col lg={3} md={4} sm={4} xs={5} className="mx-0 pe-0 ps-3 ">
                    <CustomInputBorder label="ID" placeholder="" onChange={(v) => console.log(v)} />

                </Col>
                <Col lg={2} md={4} sm={8} xs={5} className="mx-0 ps-3">

                    <CustomBorderDropDown label="Time interval" placeholder="Exact Period" data={langaugeData} onChange={(v) => { console.log(v) }} />


                </Col>
                <Col xs={6} md={3} lg={3} className="mt-4 ">
                <Form>

                <Form.Group className='position-relative mt-2'>
                  
                 <Datepicker className='date-picker-height m-0 '
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="MM/dd/yyyy"
                    placeholderText={"dd-mm-yyyy -> 13-07-2024"}
                  />
                   <FaRegCalendarAlt  className="time-picker-icons12" size={22}/>
                </Form.Group>
                </Form>
              </Col>
              <Col lg={2} md={4} sm={4} xs={5} className="mx-0 px-0">

                    <CustomBorderDropDown label="Item" placeholder="Select" data={itemsData} onChange={(v) => { console.log(v) }} />


                </Col>
                <Col lg={2} md={4} sm={4} xs={5} className="mt-3">
                    <div className=" mb-2">
                        <CusttomButton onClick={() => console.log('click')} title='Generate Report' />
                    </div>
                </Col>
            </Row>

            <section className="mx-0 px-0">
        <Container className="mt-4 mb-4 ">
          <div className="border p-3">
           

            <Row className="justify-content-between">
              <Col lg={2} md={3} sm={4} xs={5} >
                <CustomGreyDropDown label="" placeholder="Items Select" data={itemsData} onChange={(v) => { console.log(v) }} />
              </Col>
              <Col lg={2} md={3} sm={4} xs={5} >
                        <CustomGreenDropDown label="" placeholder="Export" data={itemsData} onChange={(v)=>{console.log(v)}}/>
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

export default Page9;
