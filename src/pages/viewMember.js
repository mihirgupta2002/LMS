import * as React from "react";
import Container from "@cloudscape-design/components/container";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
// import Link from "@cloudscape-design/components/link";
import "../App.css"
import {  MemberINFO } from "../data";
import imthemind from "../image_books/imthemind.jpg"
import { Link, useParams } from "react-router-dom";
import Admin from "./admin";

import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../components/GlobalContext";
export default function ViewMember() {
  const {id}=useParams();

  const {MEMBERInfo}=React.useContext(GlobalContext)
    const history= useNavigate();
    const Memberlistpage=()=>{
        history("/Memberlist"
        );

    }
    const [currentId,setcurrentId]= React.useState(0);
   
  return (
    <div className="Margin img1" >
    <Container>
    
      <SpaceBetween direction="vertical" size="s">
        <SpaceBetween direction="vertical" size="xxs">
          <Box variant="h1" >NAME:- {MEMBERInfo[id].name}</Box>
          <Box variant="h3">ID:- {MEMBERInfo[id].id}</Box>
          <Box variant="h3">NUMBER OF BOOKS BORROWED:-{MEMBERInfo[id].totalBookBorrowed}</Box>
          <Box variant="h3">BOOKS BORROWED:- { MEMBERInfo[id].booksBorrowed}</Box>
          <Box >ADDRESS:{ MEMBERInfo[id].address}</Box>
          
        </SpaceBetween>
        
        
        <Button onClick={Memberlistpage}>Close</Button>
      </SpaceBetween>
      </Container>
    </div>
  );
}