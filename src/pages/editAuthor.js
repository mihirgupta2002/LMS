import * as React from "react";
import Form from "@cloudscape-design/components/form";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import FormField from "@cloudscape-design/components/form-field";
import Input from "@cloudscape-design/components/input";
import '../App.css'
import { GlobalContext } from "../components/GlobalContext";
import { useNavigate } from "react-router-dom";
export default function EditAuthor() {
  const{addAuthor}=React.useContext(GlobalContext)
    const[name,Setname]=React.useState("");
   
    const[isbn,Setisbn]=React.useState("");
    const[author,SetAuthor]=React.useState("");
    const[authorDescription,SetAuthorDescription]=React.useState("");
    const[authorImage,SetAuthorImage]=React.useState("");
    const[authorId,setauthorId]=React.useState();
    const bookName=[];
    

    const history=useNavigate();

    const CancelPage=()=>{
        history(-1);
    }
    const AddAuthor=()=>{
      addAuthor({
        name:author,
        description:authorDescription,
        image:authorImage,
        BookName:bookName,
        authorId:authorId
      });
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
            <Button variant="primary" onClick={()=>{AddAuthor()}}>Add</Button>
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
            <FormField label="Author Id" >
              <Input  onChange={event =>setauthorId(event.detail.value)}
                value={authorId}/>
            </FormField>
            {/* <FormField label="Book Name">
              <Input  onChange={event =>Setname(event.detail.value)}
                value={name}
              />
            </FormField> */}
           

            

          </SpaceBetween>
        </Container>
      </Form>
    </form>
    </div>
  );
  
}