import React from "react";
import { Route,Routes } from "react-router-dom";
import MainContent from "../Components/MainContent/MainContent";
import Page1 from "../Pages/Page1";
import Page2 from "../Pages/Page2";
import Page3 from "../Pages/Page3";
import Page4 from "../Pages/Page4";
import Page5 from "../Pages/Page5";
import Page6 from "../Pages/Page6";
import Page7 from "../Pages/Page7";
import Page8 from "../Pages/Page8";
import Page9 from "../Pages/Page9";


function Navigtions() {
  return <>
  <Routes>
    <Route path="/" element={<MainContent />}>
    </Route>
    <Route path="/Page1" element={<Page1 />}>
    </Route>
    <Route path="/Page2" element={<Page2 />}>
    </Route>
    <Route path="/Page3" element={<Page3/>}>
    </Route>
    <Route path="/Page4" element={<Page4/>}>
    </Route>
    <Route path="/Page5" element={<Page5/>}>
    </Route>
    <Route path="/Page6" element={<Page6/>}>
    </Route>
    <Route path="/Page7" element={<Page7/>}>
    </Route>
    <Route path="/Page8" element={<Page8/>}>
    </Route>
    <Route path="/Page9" element={<Page9/>}>
    </Route>



  </Routes>
  
  
  </>

}

export default Navigtions;
