import React from "react";
import { Col,Row,Container } from "react-bootstrap";
import TableComponent from "../Components/Table/Table";
import { CustomGreyDropDown } from "../Components/DropDowns/CustomDropDown";

function Page2() {
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

  return <>

  
<section>
                <Container className="mt-4 mb-4 ms-1">
                    <div className="border p-3">
                                           <Row  className="py-0 my-0" >
                        <Col lg={2} md={3} sm={4} xs={5} >
                        <CustomGreyDropDown label="" placeholder="Items Select" data={itemsData} onChange={(v)=>{console.log(v)}}/>
                        </Col>
                      </Row>
                        <Row className="py-0 my-0" >
              <TableComponent columns={columns} data={data} />
            </Row>
                    </div>
                </Container>
            </section>


  
  
  </>;
}

export default Page2;
