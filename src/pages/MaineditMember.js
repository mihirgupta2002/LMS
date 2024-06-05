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
import { useNavigate, useParams } from "react-router-dom";
import { MemberINFO } from "../data";

export default function MainEditMember() {

    const{id}=useParams();

  const{addMember,MEMBERInfo,editMember}=useContext(GlobalContext)
    const[name,Setname]=React.useState(MEMBERInfo[id].name);
    
    const[description,Setdescription]=React.useState(MEMBERInfo[id].password)
    const[Id,SetId]=React.useState(MEMBERInfo[id].id);
    const[Address,SetAddress]=React.useState(MEMBERInfo[id].address);
  

    const history=useNavigate();

    const CancelPage=()=>{
        history(-1);
    }
    const AddMember=()=>{
      editMember({
        name:name,
        password:description,
        id:Id,
        address:Address,
        quantity : 0,
        
        bookName: ""

      },id)
      
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