// import { useState } from 'react';
// import { Button, Form, Row, Col } from 'react-bootstrap';
// import Select from 'react-select'; // Assuming 'Select' is imported from 'react-select'
import Datepicker from 'react-datepicker'; 
import "react-datepicker/dist/react-datepicker.css";
// import "./Style/Page3.css";

// function Page3() {
//     const [selectedCurrency, setSelectedCurrency] = useState(null);
//     const [selectedInterval, setSelectedInterval] = useState(null);
//     const [selectedDate, setSelectedDate] = useState(null);
  
//     const aquaticCreatures = [
//       { label: 'USD', value: 'USD' },
//       { label: 'EUR', value: 'EUR' },
//       // Add more options as needed
//     ];
  
//     const handleCurrencyChange = (opt) => {
//       setSelectedCurrency(opt);
//       console.log(opt.label, opt.value);
//     };
  
//     const handleIntervalChange = (opt) => {
//       setSelectedInterval(opt);
//       console.log(opt.label, opt.value);
//     };
  
//     const handleDateChange = (date) => {
//       setSelectedDate(date);
//       console.log(date);
//     };
  
//     const handleGenerateReport = () => {
//       console.log('Generate Report clicked');
//       // Add logic for report generation
//     };
  
//     return (
//       <section>
//         <div className="w-full mx-auto px-6 py-3">
//           <Form>
//             <Row className="align-items-center text-start px-3 ">
//               <Col xs={6} md={3} lg={2}>
//                 <Form.Group>
//                   <Form.Label>Currency</Form.Label>
//                   <Select
//                     options={aquaticCreatures}
//                     placeholder="Select currency"
//                     onChange={handleCurrencyChange}
//                     value={selectedCurrency}
//                   />
//                 </Form.Group>
//               </Col>
  
//               <Col xs={6} md={3} lg={2}>
//                 <Form.Group>
//                   <Form.Label>Time Interval</Form.Label>
//                   <Select className=''
//                     options={aquaticCreatures}
//                     placeholder="Select interval"
//                     onChange={handleIntervalChange}
//                     value={selectedInterval}
//                   />
//                 </Form.Group>
//               </Col>
  
//               <Col xs={6} md={3} lg={2}>
//                 <Form.Group>
//                   <Form.Label>Date</Form.Label>
//                   <br />
//                   <Datepicker className='date-picker-height'
//                     selected={selectedDate}
//                     onChange={handleDateChange}
//                     dateFormat="MM/dd/yyyy"
//                     placeholderText="Select date"
//                   />
//                 </Form.Group>
//               </Col>
  
//               <Col xs={6} md={3} lg={2}>
//                 <Button
//                   variant="orange" // Custom variant color, assuming you defined it in Bootstrap theme
//                   onClick={handleGenerateReport}
//                   className="w-full"
//                 >
//                   Generate Report
//                 </Button>
//               </Col>
//             </Row>
//           </Form>
//         </div>
//       </section>
//     );
// }

// export default Page3;



import React,{useState} from "react";
import { CustomBorderDropDown, CustomGreenDropDown, CustomGreyDropDown } from "../Components/DropDowns/CustomDropDown";
import { Col,Row,Container,Form } from "react-bootstrap";
import CusttomButton from "../Components/Button/CusttomButton";
import TableComponent from "../Components/Table/Table";
import './Style/Page3.css'
import SwitchComponent from "../Components/SwitchComponent/SwitchComponent";
import { FaRegCalendarAlt } from "react-icons/fa";

function Page3() {
  let itemsData=[
    {name :"item 1",
        value:"item 1"
    },
    {name :"item 2",
        value:"item 2"
    }
]
  let langaugeData=[
    {name :"English",
        value:"English"
    },
    {name :"Urdu",
        value:"Urdu"
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


  return<>
   <Container className="mt-2 ">
    <Row className="align-items-center ps-3 ms align-items-lg-center">

     
      <Col lg={2} md={3} sm={4} xs={5}  className="mx-0 ps-0">
      <CustomBorderDropDown label="Currency" placeholder="USD" data={itemsData} onChange={(v)=>{console.log(v)}}/>
      
      </Col>
      <Col lg={2} md={3} sm={4} xs={5}  className="mx-0 ps-0 pe-3">

    <CustomBorderDropDown label="Interval Time" placeholder="Exact period" data={langaugeData} onChange={(v)=>{console.log(v)}}/>
  
      
      </Col>

      <Col xs={6} md={3} lg={3}>
      <Form>

<Form.Group className='position-relative mt-lg-4 pt-lg-1'>
  
 <Datepicker className='date-picker-height m-0 '
    selected={selectedDate}
    onChange={handleDateChange}
    dateFormat="MM/dd/yyyy"
    placeholderText="dd-mm-yyyy -> 13-07-2024"
  />
   <FaRegCalendarAlt  className="time-picker-icons12" size={22}/>
</Form.Group>
</Form>
              </Col>
      <Col lg={1} md={3} sm={4} xs={5} className='me-5'>
    <div className="">

     <CusttomButton onClick={()=>console.log('click')} title='Add'/>
    </div>

      
      </Col>


    </Row>


    <section>
                <Container className="mt-4 mb-4 ms-1">
                    <div className="border p-3">
                      <Row className="justify-content-between text-start">
                        <Col lg={3} md={4} sm={6} xs={6} className="ms-0 ps-0 ">
                       <SwitchComponent onClick={(v)=>console.log(v)}/>

                        
                        </Col>
                       
                      </Row>

                      <Row className="justify-content-between">
                        <Col lg={2} md={3} sm={4} xs={5} >
                        <CustomGreyDropDown label="" placeholder="Items Select" data={itemsData} onChange={(v)=>{console.log(v)}}/>
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

export default Page3;
