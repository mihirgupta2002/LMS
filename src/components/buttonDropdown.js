import * as React from "react";
import ButtonDropdown from "@cloudscape-design/components/button-dropdown";
import Button from "@cloudscape-design/components/button";
export default function DropDown (props) {
  return (
    <ButtonDropdown
      items={[
        {
          text:"Logout",
          id: "logout",
          
        },
        {
          text: "Issued Book",
          id: "issued"
        },
       
        
      ]}
      variant="primary"
    >
      Hello {props.UserName}
    </ButtonDropdown>
  );
}