import React from "react";
import { Form } from "react-bootstrap";
import './CustomDropDown.css'
import { FaChevronDown } from "react-icons/fa";

// L B  mean left bottom border 
export function CustomLBDropDown({label,placeholder,data,onChange}) {
  console.log(data)
  return <>

  <h5 className="text-start">{label}</h5>
     <Form.Group controlId="exampleForm.SelectCustom" className="custom-dropdown">
  
      <div className="dropdown-wrapper">
        <Form.Control as="select" className="custom-dropdown-control border-0 rounded-0 shadow-none" onChange={(e)=>onChange(e.target.value)}>
          <option unselectable="">{placeholder}</option>
          {data.map((v,i)=>{
           return <option value={v.value}>{v.name}</option>
          })}


          
          
        </Form.Control>
        <FaChevronDown  className="dropdown-icon" size={22}/>
        {/* <span className="dropdown-icon">&#x25BC;</span> Unicode character for down arrow */}
      </div>
    </Form.Group>
  </>;
}

// L B  mean left bottom border 
export function CustomBRDropDown({label,placeholder,data,onChange}) {
  console.log(data)
  return <>

  <h5 className="text-start">{label}</h5>
     <Form.Group controlId="exampleForm.SelectCustom" className="custom-dropdownBR">
  
      <div className="dropdown-wrapper">
        <Form.Control as="select" className="custom-dropdown-control border-0 rounded-0 shadow-none " onChange={(e)=>onChange(e.target.value)}>
          <option unselectable="">{placeholder}</option>
          {data.map((v,i)=>{
           return <option value={v.value}>{v.name}</option>
          })}


          
          
        </Form.Control>
        <FaChevronDown  className="dropdown-icon1 " size={22}/>
        {/* <span className="dropdown-icon">&#x25BC;</span> Unicode character for down arrow */}
      </div>
    </Form.Group>
  </>;
}
// L B  mean left bottom border 
export function CustomGreyDropDown({label,placeholder,data,onChange}) {
  console.log(data)
  return <>

  <h5 className="text-start">{label}</h5>
     <Form.Group controlId="exampleForm.SelectCustom" className="">
  
      <div className="dropdown-wrapper">
        <Form.Control as="select" className="custom-dropdown-control border-0 rounded-0 custom-dropdown-grey" onChange={(e)=>onChange(e.target.value)}>
          <option unselectable="">{placeholder}</option>
          {data.map((v,i)=>{
           return <option value={v.value}>{v.name}</option>
          })}


          
          
        </Form.Control>
        <FaChevronDown  className="dropdown-icon1 " size={22}/>
        {/* <span className="dropdown-icon">&#x25BC;</span> Unicode character for down arrow */}
      </div>
    </Form.Group>
  </>;
}


//green color
export function CustomGreenDropDown({label,placeholder,data,onChange}) {
  console.log(data)
  return <>

  <h5 className="text-start">{label}</h5>
     <Form.Group controlId="exampleForm.SelectCustom" className="">
  
      <div className="dropdown-wrapper">
        <Form.Control as="select" className="custom-dropdown-control border-0 rounded-0 bg-success text-light" onChange={(e)=>onChange(e.target.value)}>
          <option unselectable="">{placeholder}</option>
          {data.map((v,i)=>{
           return <option value={v.value}>{v.name}</option>
          })}


          
          
        </Form.Control>
        <FaChevronDown  className="dropdown-icon1 text-light
        " size={22}/>
        {/* <span className="dropdown-icon">&#x25BC;</span> Unicode character for down arrow */}
      </div>
    </Form.Group>
  </>;
}



//border 
export function CustomBorderDropDown({label,placeholder,data,onChange}) {
  console.log(data)
  return <>

  <h5 className="text-start">{label}</h5>
     <Form.Group controlId="exampleForm.SelectCustom" className="custom-dropdown-border">
  
      <div className="dropdown-wrapper">
        <Form.Control as="select" className="custom-dropdown-control border-0 rounded-0 shadow-none
        " onChange={(e)=>onChange(e.target.value)}>
          <option unselectable="">{placeholder}</option>
          {data.map((v,i)=>{
           return <option value={v.value}>{v.name}</option>
          })}


          
          
        </Form.Control>
        <FaChevronDown  className="dropdown-icon " size={22}/>
        {/* <span className="dropdown-icon">&#x25BC;</span> Unicode character for down arrow */}
      </div>
    </Form.Group>
  </>;
}

