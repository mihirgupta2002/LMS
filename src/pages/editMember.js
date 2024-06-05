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
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
export default function EditMember() {

  const{addMember}=useContext(GlobalContext)
    const[name,Setname]=React.useState("");
    
    const[description,Setdescription]=React.useState("");
    const[Id,SetId]=React.useState("");
    const[Address,SetAddress]=React.useState("");
    const BooksBorrowed=[""];
    const totalBookBorrowed=0;
    const bb=[];
  

    const history=useNavigate();

    const CancelPage=()=>{
        history(-1);
    }
    const AddMember=()=>{
      addMember({
        name:name,
        password:description,
        id:Id,
        address:Address,
        quantity : 0,
        bookName: "",
        BorrowedBook:bb,
        totalBookBorrowed: 0 ,
        booksBorrowed:BooksBorrowed,
        

      })
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
            <Button variant="primary" onClick={AddMember}>Add</Button>
          </SpaceBetween>
        }
        
      >
        <Container 
          header={
            <Header variant="h2">
              Enter Details of Member
            </Header>
          }
        >
          <SpaceBetween direction="vertical" size="l">

            <FormField label="UserName">
              <Input  onChange={event =>Setname(event.detail.value)}
                value={name}
              />
            </FormField>
            
           
              
            <FormField label="Password" >
              <Input  onChange={event =>Setdescription(event.detail.value)}
                value={description}/>
            </FormField>
            <FormField label="ID" >
              <Input  onChange={event =>SetId(event.detail.value)}
                value={Id}/>
            </FormField>
            <FormField label="Address" >
              <Input  onChange={event =>SetAddress(event.detail.value)}
                value={Address}/>
            </FormField>
          

           
            

          </SpaceBetween>
        </Container>
      </Form>
    </form>
    </div>
  );
  
}