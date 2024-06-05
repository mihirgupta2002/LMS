import * as React from "react";
import Form from "@cloudscape-design/components/form";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import FormField from "@cloudscape-design/components/form-field";
import Input from "@cloudscape-design/components/input";
import '../App.css'

import { useNavigate, useParams } from "react-router-dom";
import { AUTHORINFO, BOOKINFO } from "../data";
import { GlobalContext } from "../components/GlobalContext";
export default function MainEditAuthor() {
const{AUTHORInfo, editAuthor}=React.useContext(GlobalContext)
    const{id}=useParams();
    const[name,Setname]=React.useState(AUTHORInfo[id].BookName);
   const {BOOKInfo}=React.useContext(GlobalContext)
    
    const[author,SetAuthor]=React.useState(AUTHORInfo[id].name);
    const[authorDescription,SetAuthorDescription]=React.useState(AUTHORInfo[id].description);
    const[authorImage,SetAuthorImage]=React.useState(AUTHORInfo[id].image);
    const[authorId, setAuthorId]=React.useState(AUTHORInfo[id].authorId)
    

    const history=useNavigate();

    const CancelPage=()=>{
        history(-1);
    }

    const EditNewAuthor=()=>{
      editAuthor({
        BookName:name,
        name:author,
        description:authorDescription,
        image:authorImage,
        authorId:authorId
      },id);

      BOOKInfo.map((book,index)=>
        {
          name.map((bookname)=>{
             if(bookname===book.title)
              {
               BOOKInfo[index].authorName=author;
              }
               
            })
      }
          )
        

      // console.log(BOOKInfo[value].authorName)
      // BOOKInfo[value].authorName=author;
      history(-1);
    }
        
      

    
  
     

  return (
    <div className="Margin">
    <form onSubmit={e => e.preventDefault()}>
      <Form 
        actions={
          <SpaceBetween direction="horizontal" size="xs">
            <Button formAction="none" variant="link" onClick={CancelPage}>
              Cancel
            </Button>
            <Button variant="primary" onClick={EditNewAuthor}>Add</Button>
          </SpaceBetween>
        }
        
      >
        <Container 
          header={
            <Header variant="h2">
              Enter Details of Author
            </Header>
          }
        >
          <SpaceBetween direction="vertical" size="l">

          
              
         
            <FormField label="Author Name" >
              <Input  onChange={event =>SetAuthor(event.detail.value)}
                value={author}/>
            </FormField>
            <FormField label="Author image url" >
              <Input  onChange={event =>SetAuthorImage(event.detail.value)}
                value={authorImage}/>
            </FormField>
            <FormField label="Author Description" >
              <Input  onChange={event =>SetAuthorDescription(event.detail.value)}
                value={authorDescription}/>
            </FormField>
            {/* <FormField label="Book Name">
              <Input  onChange={event =>Setname(event.detail.value)}
                value={name}
              />
            </FormField>
            */}
            <FormField label="Author Id">
              <Input value={authorId} type="number" onChange={event =>setAuthorId(event.detail.value)} />
            </FormField>

            

          </SpaceBetween>
        </Container>
      </Form>
    </form>
    </div>
  );
  
}