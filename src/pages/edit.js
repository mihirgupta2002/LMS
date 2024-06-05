import * as React from "react";
import Form from "@cloudscape-design/components/form";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import FormField from "@cloudscape-design/components/form-field";
import Input from "@cloudscape-design/components/input";
import '../App.css'
import { BOOKINFO } from "../data";
import { useContext,useState } from "react";
import { GlobalContext } from "../components/GlobalContext";
import { useNavigate } from "react-router-dom";
import Textarea from "@cloudscape-design/components/textarea";
export default function Edit() {
    const[name,Setname]=React.useState( "");
    const[url,Seturl]=React.useState("");
    const[description,Setdescription]=React.useState("");
    const[isbn,Setisbn]=React.useState("");
    const[author,SetAuthor]=React.useState("");
    const[authorDescription,SetAuthorDescription]=React.useState("");
    const[authorImage,SetAuthorImage]=React.useState("");
    const[quantity,Setquantity]=React.useState("");
    const[Status,SetStatus]=React.useState("Not Issued");
    const[idA,setIdA]=React.useState();

    const history=useNavigate();

    const CancelPage=()=>{
        history(-1);
    }
    
    const {addBook,AUTHORInfo,editAuthor}= useContext(GlobalContext);

    const onAdd=(index)=>{
        addBook({ title: name,
            image: url,
            quantity: quantity,
            isbn: isbn,
            Status: Status,
            description: description,
            authorName: selectedValue,
            AuthorImage: authorImage,
            AuthorDescription: authorDescription,
            authorId:idA
             },selectedValue,name);
             history(-1);

    }
    const [selectedValue, setSelectedValue] = useState('');
    const handleSelectChange = (e) => {
        setSelectedValue(e.target.value);
      };
    
      // Function to handle input field change
      const handleInputChange = (e) => {
        setSelectedValue(e.detail.value);
      };
    

  return (
    <div className="Margin">
    <form onSubmit={(e) => {
        e.preventDefault();
        

    }
    
    }>
      <Form 
        actions={
          <SpaceBetween direction="horizontal" size="xs">
            <Button formAction="none" variant="link" onClick={CancelPage}>
              Cancel
            </Button>
            <Button onClick={()=>onAdd()} variant="primary">Add</Button>
          </SpaceBetween>
        }
        
      >
        <Container 
          header={
            <Header variant="h2">
              Enter Details of Book
            </Header>
          }
        >
          <SpaceBetween direction="vertical" size="l">

            <FormField label="Name">
              <Input  onChange={event =>Setname(event.detail.value)}
                value={name}
              />
            </FormField>
            
            <FormField label="image Url"> 
              <Input type="url" value={url}  onChange={event =>Seturl(event.detail.value)} />
            </FormField>


            <FormField label="quantity">
              <Input value={quantity}  onChange={event =>Setquantity(event.detail.value)} />
            </FormField>
            <FormField label="isbn number">
              <Input value={isbn} type="number" onChange={event =>Setisbn(event.detail.value)} />
            </FormField>

              
            <FormField label="Description"  >
            <Textarea onChange= {event =>Setdescription(event.detail.value)} value={description} >
             <Input  
                />
                </Textarea>
             
            </FormField>

            <FormField label="Author Name" >
              <Input type="text"  onChange={handleInputChange}
                value={selectedValue}/>
                <select style={{width:"365px",marginLeft:3}} value={selectedValue} onChange={handleSelectChange}>
                <option value="">Select an option</option>
                {AUTHORInfo.map((author,index)=>(
                    <option key={index} value={author.name} >{author.name}</option>
                ))}
                </select>
            </FormField>
            {/* <FormField label="Author image url" >
              <Input  onChange={event =>SetAuthorImage(event.detail.value)}
                value={authorImage}/>
            </FormField>
            <FormField label="Author Description" >
              <Input  onChange={event =>SetAuthorDescription(event.detail.value)}
                value={authorDescription}/>
            </FormField>
            <FormField label="Author id" >
              <Input  onChange={event =>setIdA(event.detail.value)}
                value={idA}/>
            </FormField> */}
            

          </SpaceBetween>
        </Container>
      </Form>
    </form>
    </div>
  );
  
}