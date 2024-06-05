import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import {TextField} from '@mui/material';
import ModalCE from "../components/model";
import Link from '@cloudscape-design/components/link';

import "../App.css"
import { lightBlue } from '@mui/material/colors';
import Button1 from "@cloudscape-design/components/button";

import { useNavigate } from 'react-router-dom';
import { useContext,useState } from 'react';
import { GlobalContext } from '../components/GlobalContext';
import { BOOKINFO } from '../data';
import MainEdit from './MainEdit';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';






export default function Admin() {
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  
  const[searchWord,setSearchWord]=useState("");
  const history = useNavigate();
  const {BOOKInfo,AUTHORInfo}=useContext(GlobalContext)
 
  const BookPage = (index) => {

       history(`/View/${index}`)
      //history("/View")
  }
  const AuthorPage=()=>{
      history("/Author")
  }
  const EditPage=(index)=>{
    history(`/MainEdit/${index}`)
  }
  const addBook=()=>{
    history("/edit")
  }
  // const ViewALLMember=()=>{
  //   history("/Memberlist")
  // }
  // const ViewALLAuthor=()=>{
  //   history("/Authorlist")
  // }

  const {deleteBook}=useContext(GlobalContext);
const[callMainedit,setcallMainedit]=React.useState(false);
  // const EditPage=( title,image,quantity,isbn,description,authorName,index)=>{
    
  //   console.log(title);
  //   console.log(image);
  //   console.log(authorName);

  // }
 
 
const DeleteBOOK=(index)=>{
const indexV= AUTHORInfo.findIndex((author)=>(BOOKInfo[index].authorName===author.name));
if(indexV!==-1){
  const bookIndex= AUTHORInfo[indexV].BookName.findIndex((book)=>(BOOKInfo[index].title===book))
AUTHORInfo[indexV].BookName.splice(bookIndex,1);



  BOOKInfo.splice(index,1);
}


}

  
  

  return (

    <>
    
    <Typography variant='h4' sx={{margin:2, marginTop:5 ,color:"#125488",textDecoration:"underline"}}>Admin Panel</Typography>
    {/* <Button1 iconAlign="right" variant="primary" onClick={AddPage}>
      ADD
    </Button1>
    <Button1 iconAlign="right" variant="primary" onClick={ViewALLMember}>
      View Members
    </Button1>
    <Button1 iconAlign="right" variant="primary" onClick={ViewALLAuthor}>
      View Authors
    </Button1> */}
    
    <Typography variant='h4'sx={{margin:2,color:"#125488"}}>Books</Typography>
    <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
    {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchWord}
              onChange={(e)=>{setSearchWord(e.target.value)}}

            />
          </Search> */}
          <TextField
          id="outlined-basic"
          onChange={(e)=>(setSearchWord(e.target.value))}
          variant="outlined"
          
          label="Search"
           />
    <Button variant='outlined' onClick={addBook}>Add</Button></div>
    <TableContainer component={Paper}>
      <Table  stickyHeader sx={{ minWidth: 650 ,backgroundColor:"#3DD9D6"}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{backgroundColor:"#37CAEC ",color:'white'}}>Name</TableCell>
            <TableCell sx={{backgroundColor:"#37CAEC ",color:'white'}}>Image</TableCell>
            <TableCell sx={{backgroundColor:"#37CAEC ",color:'white'}}>Quantity</TableCell>
            <TableCell sx={{backgroundColor:"#37CAEC ",color:'white'}}>Isbn</TableCell>
            <TableCell sx={{backgroundColor:"#37CAEC ",color:'white'}} >Description</TableCell>
            <TableCell sx={{backgroundColor:"#37CAEC ",color:'white'}}>Author</TableCell>
            <TableCell sx={{backgroundColor:"#37CAEC ",color:'white'}}>Action</TableCell>
          </TableRow>

        </TableHead>
        <TableBody>
          {BOOKInfo.filter(books=>books.title.includes(searchWord)).map((book,index) => (
            <TableRow
              key={book.isbn}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {book.title}
              </TableCell>
              <TableCell ><img className='img1' style={{width:"75px",height:"75px",objectFit:"fill"} }src={book.image} alt='Book'/> </TableCell>
              <TableCell>{book.quantity}</TableCell>
              <TableCell align="right">{book.isbn}</TableCell>
              <TableCell >{book.description}</TableCell>
              <TableCell>{book.authorName}</TableCell>
              <TableCell>
              <Button variant='outlined' onClick={()=>BookPage(index)}>VIEW</Button>
              <Button variant='outlined' onClick={()=>EditPage(index)}>Edit</Button>
              <Button variant='outlined' onClick={()=>{DeleteBOOK(index)} }>Delete</Button>
              {/* <Button variant='outlined' onClick={AuthorPage}>Author</Button> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    
    </>
    
    
  );



    
}