import React from "react";
import { Button } from "react-bootstrap";

function CusttomButton({onClick ,title}) {
  return   <Button type="submit" className="rounded-pill text-light bg-warning py-2 mt-4 cursor-pointer w-full border-0"  onClick={onClick}>
 {title}
</Button>
;
}

export default CusttomButton;
