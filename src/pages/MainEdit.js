import * as React from "react";
import Form from "@cloudscape-design/components/form";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import FormField from "@cloudscape-design/components/form-field";
import Input from "@cloudscape-design/components/input";
import '../App.css'
import { AUTHORINFO } from "../data";
import { useContext } from "react";
import { GlobalContext } from "../components/GlobalContext";
import { useNavigate, useParams } from "react-router-dom";
export default function MainEdit(props) {
    const{BOOKInfo,AUTHORInfo}=useContext(GlobalContext);

    const {id}=useParams();
    

    const[name,Setname]=React.useState(BOOKInfo[id].title )
    const[url,Seturl]=React.useState(BOOKInfo[id].image);
    const[description,Setdescription]=React.useState(BOOKInfo[id].description);
    const[isbn,Setisbn]=React.useState(BOOKInfo[id].isbn);
    // const[author,SetAuthor]=React.useState(BOOKInfo[id].authorName);
    const[authorDescription,SetAuthorDescription]=React.useState(BOOKInfo[id].Authordescription);
    const[authorImage,SetAuthorImage]=React.useState(BOOKInfo[id].AuthorImage);
    const[quantity,Setquantity]=React.useState(BOOKInfo[id].quantity);
    const[Status,SetStatus]=React.useState("Not Issued");
    const [idA,setIdA]=React.useState(BOOKInfo[id].authorId)


    
    

    const history=useNavigate();

    const CancelPage=()=>{
        history(-1);
    }
    
    const {editBook}= useContext(GlobalContext);

    const onAddNew=()=>{

          const value= AUTHORInfo.findIndex((author1)=>(author===author1.name));
            console.log(AUTHORInfo[value])
            console.log(BOOKInfo[id].title)
            const valnew= AUTHORInfo[value].BookName.findIndex((ind)=>(BOOKInfo[id].title===ind));
            console.log(AUTHORInfo[value].BookName[valnew])

            if(valnew!==-1){
              
              AUTHORInfo[value].BookName.splice(valnew,1);
             AUTHORInfo[value].BookName.push(name);
            }
            else{
              console.log("Else loop")
              // console.log(BOOKInfo[id].authorName)
              const authorId= AUTHORInfo.findIndex((autho1r)=>(BOOKInfo[id].authorName===autho1r.name))
              console.log(authorId)
              // AUTHORInfo
              console.log(AUTHORInfo[authorId].name)
              const valnew2= AUTHORInfo[authorId].BookName.findIndex((ind)=>(BOOKInfo[id].title===ind));
              console.log(AUTHORInfo[authorId].BookName[valnew2])
              
              AUTHORInfo[authorId].BookName.splice(valnew2,1);

              AUTHORInfo[value].BookName.push(name);
            }
        editBook({ title: name,
            image: url,
            quantity: quantity,
            isbn: isbn,
            Status: "Not Issued",
            description: description,
            authorName: author,
            AuthorImage: authorImage,
            AuthorDescription: authorDescription,
            idA:idA
             },id);

           
            
       
             history(-1);

    }
    const [author, setSelectedValue] = React.useState(BOOKInfo[id].authorName);
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
            <Button onClick={onAddNew} variant="primary">Add</Button>
          </SpaceBetween>
        }
        
      >
        <Container 
          header={
            <Header variant="h2">
              Edit Details of Book
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

              
            <FormField label="Description" >
              <Input  onChange={event =>Setdescription(event.detail.value)}
                value={description}/>
            </FormField>

            {/* <FormField label="Author Name" >
              <Input  onChange={event =>SetAuthor(event.detail.value)}
                value={author}/>
            </FormField> */}
            <FormField label="Author Name" >
              <Input type="text"  onChange={handleInputChange}
                value={author}/>
                <select style={{width:"365px",marginLeft:3}} value={author} onChange={handleSelectChange}>
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