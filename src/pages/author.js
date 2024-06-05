import * as React from "react";
import Container from "@cloudscape-design/components/container";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
import Link from "@cloudscape-design/components/link";
import "../App.css"
import { BOOKINFO, AUTHORINFO } from "../data";
import { useNavigate, useParams } from "react-router-dom";


import imthemind from "../image_books/imthemind.jpg"
import { GlobalContext } from "../components/GlobalContext";

export default function Author() {  
  const {AUTHORInfo}=React.useContext(GlobalContext)
    const history = useNavigate();
    const {id}=useParams();


    const CancelPage=()=>{
        history(-1);

    }
  return (
    <div className="Margin img1" >
    <Container
      media={{
        content: (
          <img  style={{width:"200px",height:"200px",objectFit:"fill"}}
            src={AUTHORInfo[id].image}
            alt="placeholder"
          />
        ),
        width:" 200px",
        position: "side"
      }}
      
    >
      <SpaceBetween direction="vertical" size="s">
        <SpaceBetween direction="vertical" size="xxs">
          <Box variant="small">{AUTHORInfo[id].BookName}</Box>
          <Box variant="h2">{AUTHORInfo[id].name}</Box>
        </SpaceBetween>
        {AUTHORInfo[id].description}
        <Button onClick={CancelPage}>Close</Button>
      </SpaceBetween>
    </Container></div>
  );
}