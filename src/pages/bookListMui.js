import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, TextField, Typography } from '@mui/material';
import { BOOKINFO } from '../data';
import MultiActionAreaCard from '../components/demo_componenet/MultiActionCard';
import "../App.css";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useContext,useState } from 'react';
import { GlobalContext } from '../components/GlobalContext';


import { useNavigate } from 'react-router-dom';
import { lightGreen } from '@mui/material/colors';
import { convertLength } from '@mui/material/styles/cssUtils';

export default function BookTableCE() {
const { setBOOKINFO,BOOKInfo}= useContext(GlobalContext)
  const history=useNavigate();

  const viewbook=()=>{
      history("/view")
  }
  const ViewAuthor=()=>{
    history("/author")
}
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
let inputHandler = (e) => {
  //convert input text to lower case
  var lowerCase = e.target.value.toLowerCase();
  setSearchWord(lowerCase);
};

  return (

    <>
     
          
    <Typography variant='h4' color={'whitesmoke'} sx={{margin:2, marginTop:4, color:"#125488",marginBottom:4}}>Book List</Typography>
<div style={{ display: 'flex', justifyContent: 'flex-end'}}>
      {/* <Search value={searchWord}
              onChange={(e)=>(setSearchWord(e.target.value))}>
            <SearchIconWrapper>
            
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              
              
            >
        
            </StyledInputBase>
          </Search>  */}
          
          <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          
          label="Search"
           /> 
          </div>




    <TableContainer component={Paper}>
      <Table stickyHeader sx={{ minWidth: 650 ,backgroundColor:"#3DD9D6"}} aria-label="simple table">
        <TableHead>
          <TableRow sx={{}}>
            <TableCell sx={{backgroundColor:"#37CAEC ",color:'white'}}>NAME</TableCell>
            <TableCell sx={{backgroundColor:"#37CAEC",color:'white'}}>IMAGE</TableCell>
            <TableCell sx={{backgroundColor:"#37CAEC",color:'white'}}>QUANTITY</TableCell>
            <TableCell sx={{backgroundColor:"#37CAEC",color:'white'}}>ISBN</TableCell>
            <TableCell sx={{backgroundColor:"#37CAEC",color:'white'}}>DESCRIPTION</TableCell>
            <TableCell sx={{backgroundColor:"#37CAEC",color:'white'}}>ACTION</TableCell>
          </TableRow>

        </TableHead>
        <TableBody>
          {BOOKInfo.filter(book => book.title.toLowerCase().includes(searchWord)).map((book) => (
            <TableRow
              key={book.isbn}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {book.title}
              </TableCell>
              <TableCell ><img className='img1' src={book.image} alt='Book'/> </TableCell>
              <TableCell>{book.quantity}</TableCell>
              <TableCell align="right">{book.isbn}</TableCell>
              <TableCell >{book.description}</TableCell>
              <TableCell>
              <Button variant='outlined' onClick={viewbook}>VIEW</Button>
              <Button variant='outlined' onClick={ViewAuthor}>Author</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer></>
  
  );
}