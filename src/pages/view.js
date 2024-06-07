import * as React from "react";
import Container from "@cloudscape-design/components/container";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
// import Link from "@cloudscape-design/components/link";
import "../App.css"
import { AUTHORINFO, BOOKINFO, MemberINFO } from "../data";
import imthemind from "../image_books/imthemind.jpg"
import { Link, useParams } from "react-router-dom";
import Admin from "./admin";
// import { GlobalContext } from "../components/GlobalContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import author1 from "../image_author/author1.jpg"
import AuthorList from "./AuthorList";
import { GlobalContext } from "../components/GlobalContext";
export default function View() {
    const history = useNavigate();
    const {id}=useParams();
    const {BOOKInfo,AUTHORInfo,}=useContext(GlobalContext)
    console.log(id);
    // const GlobalVariables=useContext(GlobalContext);

    const backtohome=()=>{
        
            history(-1);
            // console.log(GlobalVariables.isAdminG);

       
    }
    console.log(BOOKInfo[id].authorName);
    const index= AUTHORInfo.findIndex((index)=>(BOOKInfo[id].authorName===index.name));
    console.log(index);
    

   
  return (
    <div className="Margin " >
    <Container
      media={{
        content: (
          <img 
            src={BOOKInfo[id].image} 
            alt="placeholder"
          />
        ),
        width:"250px",
        position: "side"
      }}
    >
      <SpaceBetween direction="vertical" size="s">
        <SpaceBetween direction="vertical" size="xxs">
          <Box variant="h3">TITLE:{BOOKInfo[id].title}</Box>
          <Box variant="h4">ISBN:{BOOKInfo[id].isbn}</Box>
          <Box variant="small">Summary: {BOOKInfo[id].description}</Box>
          <br></br>
          
          <Box variant="h3">AUTHOR:{index===-1?null :AUTHORInfo[index].name}</Box>
          <div  >
          <img  width='100px' src={index===-1?null :AUTHORInfo[index].image} alt="AuthorPic"/>
          </div>
          <Box variant="small" >About the Author: {index===-1?null :AUTHORInfo[index].description}</Box>
          
      
          

        </SpaceBetween>
        
       
        <Button  onClick={backtohome}>Close</Button>
      </SpaceBetween>
    </Container></div>
  );
}