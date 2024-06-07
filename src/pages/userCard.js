import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Experimental_CssVarsProvider, Typography } from '@mui/material';
import { BOOKINFO, MemberINFO } from '../data';
import { GlobalContext } from '../components/GlobalContext';
import { useContext } from 'react';
import "../App.css"
import { lightBlue } from '@mui/material/colors';
import Alert from '@mui/material/Alert';
import Cards from '@cloudscape-design/components/cards';
import "../App.css"

import { useNavigate, useParams } from 'react-router-dom';
import LibraryCard from './librarycard';




export default function UserCard() {
  const [showAlert,setShowAlert]=React.useState(false)
  const [showAlertR,setShowAlertR]=React.useState(false)
  const{id}=useParams();
    const history = useNavigate();
    const{BOOKInfo,MEMBERInfo,bookRequestList,addRequest,Username}=useContext(GlobalContext)
 
    const UserPage = (index) => {
    
      history(`/View/${index}`)
    }

    const viewUserBook=()=>{
        history(`/userrequest/${id}`)


    }
    const deleteIndex=(index)=>{
      if(MEMBERInfo[id].BorrowedBook[index].Status==="Rejected"){
         MEMBERInfo[id].BorrowedBook.splice(index,1)
      }
      else{
        setShowAlert(true);
        setTimeout(()=> setShowAlert(false),3000)
       
      }
     
    }


    const BorrowedPage=(index)=>{
      const index1= BOOKInfo.findIndex((book)=>(MEMBERInfo[id].BorrowedBook[index].title===book.title))
      if(index1!==-1){history(`/View/${index1}`)};
      
    }
    const IssueBook=(index)=>{
        
           
        
      if( BOOKInfo[index].quantity!==0 ){
      
        


        const isbnnum= MEMBERInfo[id].BorrowedBook.findIndex((book)=>(BOOKInfo[index].title===book.title ))
        if(isbnnum===-1){
           --BOOKInfo[index].quantity ;
        bookRequestList.push(
          {title:BOOKInfo[index].title,quantity:BOOKInfo[index].quantity,request:0,
            memberName:MEMBERInfo[id].name, Status:"Pending"
          }
        )
        console.log(bookRequestList)
        MEMBERInfo[id].BorrowedBook.push({title:BOOKInfo[index].title,request:0,
          Status:"Pending",image:BOOKINFO[index].image,isbn:BOOKInfo[index].isbn,description:BOOKInfo[index].description })
          // MEMBERInfo[id].booksBorrowed.push(BOOKInfo[index].title);
          
          // MEMBERInfo[id].totalBookBorrowed= MEMBERInfo[id].totalBookBorrowed+1;
         
        }
      
        
        // else{
        //   --BOOKInfo[index].quantity ;
        //   ++MEMBERInfo[id].BorrowedBook[isbnnum].quantity;

        // }
       
      }
    }
    const ReturnBook=(index)=>{
      if(MEMBERInfo[id].BorrowedBook[index].Status==="Issued"){
        console.log(MEMBERInfo[id].BorrowedBook[index].title)
        const bookIndex= BOOKInfo.findIndex((book)=>(MEMBERInfo[id].BorrowedBook[index].title===book.title))
        ++BOOKInfo[bookIndex].quantity;
        MEMBERInfo[id].BorrowedBook[index].Status="Not Issued";
        
        console.log(MEMBERInfo[id].BorrowedBook[index].title);
        const bookIndex1= MEMBERInfo[id].booksBorrowed.findIndex((book)=>(MEMBERInfo[id].BorrowedBook[index].title===book))
        MEMBERInfo[id].booksBorrowed.splice(bookIndex1,1);
        MEMBERInfo[id].totalBookBorrowed= MEMBERInfo[id].totalBookBorrowed-1;
        MEMBERInfo[id].BorrowedBook.splice(index,1);
      }
      else{
        if(MEMBERInfo[id].BorrowedBook[index].Status==="Rejected"){
            setShowAlertR(true);
        setTimeout(()=> setShowAlertR(false),3000);
        }
        else if(MEMBERInfo[id].BorrowedBook[index].Status==="Pending"){
          setShowAlert(true);
        setTimeout(()=> setShowAlert(false),3000);

        }

      
      }
    }
    // const AuthorPage=()=>{
    //     history("/Author")
    // }
  return(

    <div style={{margin:"60px"}}>
    <div style={{display:"flex", justifyContent:"flex-end"}}>{ !showAlert ? null:<Alert variant="outlined" severity="error">
  Request Pending .
</Alert>}
    <Button sx={{backgroundColor:"white"}} onClick={()=>viewUserBook()}>{MEMBERInfo[id].name} Books</Button>
  </div>  
  <div className="Library" >
      <Typography variant='h4' color={'whitesmoke'} sx={{margin:2, marginTop:4, color:"#125488",marginBottom:4}}>LIBRARY BOOKS AVAILABLE</Typography>
     <div className="library-card-container" style={{display:"flex", justifyContent:"flex-start",direction:"column" }}>
     
      {BOOKInfo.map((book,index)=>(
        
    
        <LibraryCard quantity={book.quantity} id={id} image={book.image}  bookIssue={()=>IssueBook(index)}
       selectedClick={()=>UserPage(index)} title={book.title} authorName={book.authorName} description={book.description} isbn={book.isbn} />
      ))}
      </div>
   </div>
    

  </div>
 
  );
}