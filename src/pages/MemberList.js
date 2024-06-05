import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import { MemberINFO } from '../data';
import { useContext,useState } from 'react';
import { GlobalContext } from '../components/GlobalContext';
import {TextField} from '@mui/material';
import "../App.css"
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


import { useNavigate } from 'react-router-dom';

export default function MemberList() {
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

  const history=useNavigate();
  const {deleteMember,MEMBERInfo}= useContext(GlobalContext)
  

  const viewMember=(index)=>{
      history(`/viewMember/${index}`)
  }
  const AddMember=()=>{
    history("/EditMember")
    
}
const BacktoAdmin=()=>{
  history("/admin")
}

const EditMember=(index)=>{
  history(`/MainEditMember/${index}`)

}

  return (

    <>
    <Typography variant='h4' color={'#82b1ff'} sx={{margin:2, marginTop:5}}>Member List</Typography>
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
    <Button variant='outlined' onClick={BacktoAdmin}  >Back</Button>
    <Button variant='outlined' onClick={AddMember} >ADD </Button>
   </div> 
   <TableContainer component={Paper}>
      <Table stickyHeader sx={{ minWidth: 650 ,backgroundColor:"#3DD9D6"}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{backgroundColor:"#37CAEC ",color:'white'}}>Name</TableCell>
            <TableCell sx={{backgroundColor:"#37CAEC ",color:'white'}}>Total Borrowed Books</TableCell>
            <TableCell sx={{backgroundColor:"#37CAEC ",color:'white'}} >Book Borrowed</TableCell>
            <TableCell sx={{backgroundColor:"#37CAEC ",color:'white'}}>Action</TableCell>
          </TableRow>

        </TableHead>
        <TableBody>
          {MEMBERInfo.filter(Member=>Member.name.includes(searchWord)).map((member,index) => (
            <TableRow
              key={member.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {member.name}
              </TableCell>
              <TableCell variant='outlined'>{member.totalBookBorrowed}</TableCell>
              <TableCell > {member.booksBorrowed}</TableCell>
              <TableCell>
              <Button variant='outlined' onClick={()=>viewMember(index)}>VIEW</Button>
              <Button variant='outlined' onClick={()=>EditMember(index)}>Edit</Button>
              <Button variant='outlined' onClick={()=>MEMBERInfo.splice(index,1)} >Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer></>
  );
}