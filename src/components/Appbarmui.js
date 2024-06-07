
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useState ,useContext} from 'react';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Router } from 'react-router-dom';
import { Switch } from '@mui/material';
import DropDown from './buttonDropdown';

import SignUp from './login/signup';

import ViewRequest from '../pages/ViewRequest';

import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
// import MenuIcon from '@mui/icons-material/Menu';
import {Routes,Route, Navigate, } from 'react-router-dom'

import LoginDialog from './login/login';

import BookTableCE from '../pages/bookListMui';
import Button1 from '@cloudscape-design/components/button';

import Author from '../pages/author';
import Edit from '../pages/edit';
import View from '../pages/view';
import User from '../pages/user';
import Admin from '../pages/admin';
import MemberList from '../pages/MemberList';
import ViewMember from '../pages/viewMember';
import AuthorList from '../pages/AuthorList';
import { GlobalContext } from './GlobalContext';

import { useNavigate } from 'react-router-dom';
import EditAuthor from '../pages/editAuthor';
import EditMember from '../pages/editMember';
import MainEdit from '../pages/MainEdit';
import MainEditMember from '../pages/MaineditMember';
import MainEditAuthor from '../pages/MainEditAuthor';

import UserCard from '../pages/userCard';
import Selfcard from '../pages/newCard.js/Selfcard';
import LibraryCard from '../pages/librarycard';
import Userrequest from '../pages/userRequest';
import Mainpage from '../pages/mainpage';



  function ButtonAppBar() {
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
  
    const SubmitLogin =(username,password)=>{
      console.log(username,password);
      setshowLoginPage(false);

    }

    const CloseLogin=()=>{
      setshowLoginPage(false);
    }
    const SubmitSignup=(username,password)=>{
      console.log(username,password);
      setShowSignupPage(false);

    }
    const CloseSignup=()=>{
      setShowSignupPage(false);
    }


    const {isAdmin,Username,setisAdmin}=useContext(GlobalContext);


    const[showLoginPage,setshowLoginPage]=useState(false);
    const[showSignupPage,setShowSignupPage]=useState(false);
    const[loggedIn,setLoggedIn]=useState(false);
    const[adminLoggedIn,setAdminLoggedIn]=useState(false);
    const history = useNavigate();
    const ViewBook=()=>{
      history("/admin")
    }
    const ViewALLMember=()=>{
      history("/Memberlist")
    }
    const ViewALLAuthor=()=>{
      history("/Authorlist")
    }
    const exit=()=>{
      setLoggedIn(false);
      setisAdmin(false);

      history("/book")
    }
    const viewRequest=()=>{
      history("/ViewRequest");
    }
   
  
  return (
     <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
            Library Management System
          </Typography>
         
          
          {/* <FullWidthTabs></FullWidthTabs> */}

          {isAdmin ?<> 
          <Button1 iconAlign='right' variant='primary' onClick={viewRequest}>Request</Button1>
          <Button1 iconAlign="right" variant="primary" onClick={ViewBook}>
      View Books
    </Button1>
    <Button1 iconAlign="right" variant="primary" onClick={ViewALLMember}>
      View Members
    </Button1>
    <Button1 iconAlign="right" variant="primary" onClick={ViewALLAuthor}>
      View Authors
    </Button1>
          </> :null}
                 
          
       
          

      


{/* 
          <Search>
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
          
          
          
          {!loggedIn? <>
            <Button1 onClick={()=>{setShowSignupPage(true);setLoggedIn(true)}}>Sign Up</Button1>
          <Button onClick={()=>{setshowLoginPage(true);setLoggedIn(true)} } color="inherit">Login</Button> </>:
           <> <Button1 onClick={()=>exit()}>LogOut {Username}</Button1>
           {/* <DropDown UserName={Username}></DropDown>*/}
          </> 
          }
          
         
          
        </Toolbar>
      </AppBar>
    </Box>
                <Routes>
                    <Route path='/book' exact element={<Mainpage/>}/>
                    
                    <Route path='*' element={<Navigate to="/book" replace/>}/>
                    <Route path='/author/:id' exact element={<Author/>}/> 
                    <Route path='/user/:id' exact element={<User/>}/>
                    <Route path='/admin' exact element={<Admin/>}/> 
                    <Route path='/edit' exact element={<Edit/>}/>
                    <Route path='/view/:id' exact element={<View/>}/>
                    <Route path='/MemberList' exact element={<MemberList/>}/>
                    <Route path='/ViewMember/:id' exact element={<ViewMember/>}/>
                    <Route path='/AuthorList' exact element={<AuthorList/>}/>
                    <Route path='/editAuthor' exact element={<EditAuthor/>}/>
                    <Route path='/editMember' exact element={<EditMember/>}/>
                    <Route path='/MainEdit/:id' exact element={<MainEdit/>}/>
                    <Route path='/MainEditMember/:id' exact element={<MainEditMember/>}/>
                    <Route path='/MainEditAuthor/:id' exact element={<MainEditAuthor/>}/>
                    <Route path='/ViewRequest' exact element={<ViewRequest/>}/>

                    <Route path='/cardBook' exact element={<LibraryCard/>}/>
                    <Route path='/userCard/:id' exact element={<UserCard/>}/>
                    <Route path='/userrequest/:id' exact element={<Userrequest/>}/>
                    <Route path='/mainpage' exact element={<Mainpage/>}/>
                  

                </Routes>
                <SignUp open={showSignupPage} handleClose={CloseSignup} handleSubmit={SubmitSignup}/> 
               <LoginDialog open={showLoginPage} handleClose={CloseLogin} handleSubmit={SubmitLogin}/> 
          
          
    

   </>
  );
}

export default ButtonAppBar;
