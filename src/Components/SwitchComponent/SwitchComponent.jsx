import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup } from 'react-bootstrap';
import './SwitchComponent.css'

const SwitchComponent = ({onClick}) => {
  const [activeSwitch, setActiveSwitch] = useState('switch1');

  const switchStyle = {
    transform: 'skewX(25deg)',
   
  };

  const innerSwitchStyle = {
    transform: 'skewX(-25deg)',
  };

  return (
    <div className="d-flex border m-2 bg-light justify-content-center align-items-center  overflow-hidden " style={{ width: '60%',height:'50px' }}>
      <ButtonGroup style={{width:'800px', position:'relative' ,left:"0px"}}>
        <Button
         className={` py-2 px-4 m-o shadow-none border-0 cursor-pointer w-100 ${activeSwitch === 'switch1' ?  'bg-1 text-light' :'bg-light text-dark '}`}
          style={switchStyle}
          onClick={() => {setActiveSwitch('switch1')
            onClick('switch1')
          }}
        >
          <div style={innerSwitchStyle}>
            SWITCH
            
          </div>
        </Button>
        <Button
          
          className={` py-2 px-4 shadow-none border-0  cursor-pointer w-100  ${activeSwitch === 'switch2' ? 'bg-1 text-light' :'bg-light text-dark' }`}
          style={switchStyle}
          onClick={() => {setActiveSwitch('switch2')
            onClick('switch2')
          }}
        >
          <div style={innerSwitchStyle}>
            SWITCH
           
          </div>
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default SwitchComponent;
