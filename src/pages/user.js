import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import { BOOKINFO, MemberINFO } from '../data';
import { GlobalContext } from '../components/GlobalContext';
import { useContext } from 'react';
import "../App.css"
import { lightBlue } from '@mui/material/colors';
import Alert from '@mui/material/Alert';


import { useNavigate, useParams } from 'react-router-dom';




export default function User() {
  const [showAlert,setShowAlert]=React.useState(false)
  const [showAlertR,setShowAlertR]=React.useState(false)
  const{id}=useParams();
    const history = useNavigate();
    const{BOOKInfo,MEMBERInfo,bookRequestList,addRequest}=useContext(GlobalContext)
 
    const UserPage = (index) => {
    
      history(`/View/${index}`)
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
  return (

    <>
    
    <Typography variant='h4' color={lightBlue} sx={{margin:2, marginTop:5,color:"#125488",textDecoration:"underline"}}> Welcome {MEMBERInfo[id].name}</Typography>
    <Typography variant='h4' color={'#82b1ff'} sx={{margin:2,color:"#125488"}}>Book List</Typography>
    
    <TableContainer component={Paper}>
      <Table stickyHeader sx={{ minWidth: 650 ,backgroundColor:"#3DD9D6"}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{backgroundColor:"#37CAEC ",color:'white'}}>Name</TableCell>
            <TableCell sx={{backgroundColor:"#37CAEC ",color:'white'}}>Image</TableCell>
            <TableCell sx={{backgroundColor:"#37CAEC ",color:'white'}}>Quantity</TableCell>
            <TableCell sx={{backgroundColor:"#37CAEC ",color:'white'}} >Isbn</TableCell>
            {/* <TableCell sx={{backgroundColor:"#37CAEC ",color:'white'}} >Status</TableCell> */}
            <TableCell sx={{backgroundColor:"#37CAEC ",color:'white'}}>Description</TableCell>
            <TableCell sx={{backgroundColor:"#37CAEC ",color:'white'}}>Action</TableCell>
          </TableRow>

        </TableHead>
        <TableBody>
          {BOOKInfo.map((book,index) => (
            <TableRow
              key={book.isbn}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" >
                {book.title}
              </TableCell>
              <TableCell ><img className='img1' src={book.image} alt='Book'/> </TableCell>
              <TableCell >{book.quantity}</TableCell>
              <TableCell align="right">{book.isbn}</TableCell>
              {/* <TableCell align="right">{book.Status}</TableCell> */}
              <TableCell >{book.description}</TableCell>
              <TableCell >
              <Button variant='outlined' onClick={()=>UserPage(index)}>VIEW</Button>
              <Button variant='outlined' onClick={()=>IssueBook(index)}>ISSUE</Button>
              {/* <Button variant='outlined' onClick={()=>ReturnBook(index)}>RETURN</Button> */}
              {/* <Button variant='outlined' onClick={AuthorPage}>Author</Button> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Typography variant='h4'  sx={{margin:2, marginTop:10,color:"#125488",textDecoration:"underline"}}> Books Borrowed by User</Typography>
    { !showAlert ? null:<Alert variant="outlined" severity="error">
  Request Pending .
</Alert>}
{ !showAlertR ? null:<Alert variant="outlined" severity="error">
  Request Pending/Rejected .
</Alert>}
    <TableContainer component={Paper}>
      <Table stickyHeader sx={{ minWidth: 650 ,backgroundColor:"#3DD9D6"}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{backgroundColor:"#37CAEC ",color:'white'}}>Name</TableCell>
            <TableCell sx={{backgroundColor:"#37CAEC ",color:'white'}}>Image</TableCell>
            <TableCell sx={{backgroundColor:"#37CAEC ",color:'white'}} >Isbn</TableCell>
            <TableCell sx={{backgroundColor:"#37CAEC ",color:'white'}} >Status</TableCell>
            <TableCell sx={{backgroundColor:"#37CAEC ",color:'white'}}>Description</TableCell>
            <TableCell sx={{backgroundColor:"#37CAEC ",color:'white'}}>Action</TableCell>
          </TableRow>

        </TableHead>
       
        <TableBody>
          {MEMBERInfo[id] ? MEMBERInfo[id].BorrowedBook.map((book,index) => (
            
        
            <TableRow
              key={book.isbn}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            {/* {book.request===0 ?null:  */}
            <>
              <TableCell component="th" scope="row" >
                {book.title}
              </TableCell>
              <TableCell ><img className='img1' src={book.image} alt='Book'/> </TableCell>
              
              <TableCell >{book.isbn}</TableCell>
              <TableCell >{book.Status}</TableCell>
              <TableCell >{book.description}</TableCell>
              <TableCell >
              <Button variant='outlined' onClick={()=>BorrowedPage(index)}>VIEW</Button>
              <Button variant='outlined' onClick={()=>ReturnBook(index)}>RETURN</Button>
              <Button variant='outlined' onClick={()=>deleteIndex(index)}>Delete</Button>
              
              </TableCell>
            </>
            {/* } */}
            </TableRow>
            ))
          :
          null}
        </TableBody>
        
      </Table>
    </TableContainer>
    </>
  );
}