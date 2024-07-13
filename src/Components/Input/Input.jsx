import React from "react";
import { Form,Container} from "react-bootstrap";

function CustomInputBorder({placeholder, onChange ,label}) {
    return <>
   <Container className="p-0">
   <Form>
        <Form.Group className="text-start">
            <Form.Label className="fw-bold ">{label}</Form.Label>
            <Form.Control required type="text" placeholder={placeholder} className="bg-white focus-white rounded-0 border-2 border" onChange={(e)=>onChange(e.target.value)} />
        </Form.Group>
        </Form>
   </Container>
    </>;
}

export default CustomInputBorder;
