import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';
import { Slide } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import {GlobalContext} from '../GlobalContext';
import { MemberINFO } from '../../data';


const Transition =React.forwardRef(function Transition(props, ref){
    return <Slide direction='up' ref={ref} {...props}/>
})

const  LoginDialog=({ open,handleClose,handleSubmit}) => {

    const history=useNavigate();
 

  
//   const[showLoginButton,setshowLoginPage]=React.useState(true);
  const {isAdmin,func ,setUser,setPassword,password,Username,MEMBERInfo}=useContext(GlobalContext);

  
  
  
  
// console.log(isAdmin);
 
  const onSubmit=(event)=>{
    event.preventDefault()
    
    //remove login button and display Logged in
    handleSubmit(Username,password);
    const found= MEMBERInfo.findIndex((member)=>{
      return member.name===Username;

    })
    if(Username ==="Admin" && password==="Admin"){
       
        func(true);
        // isAdminG.=true;
        // console.log(isAdmin);
        // console.log(GlobalVariables.isAdminG);
        history("/Admin")
    }
    else if(found!==-1){
        // func(false);
        // if(MEMBERInfo.includes(Username)){
        // }
       
        // history(`/user${id}`)
        history(`/user/${found}`)
    }
    else{
      history( "/book");

    }
    console.log(isAdmin);
  }

  const handleEnterKeyDown=(event)=>{
    if(event.key==='Enter'){
        onSubmit(event);
    }
  }

 
  return (




    <>
    
        <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        keepMounted
        onKeyDown={handleEnterKeyDown}
      >
      
        <DialogTitle >Login</DialogTitle>
        <DialogContent>
          
          <TextField
            autoFocus
            required
            margin="dense"
            id="Username"
            name="Username"
            label="Username"
            type="text"
            fullWidth
            variant="standard"
            value={Username}
            onChange={(e)=>{
                setUser(e.target.value)
            }}
          />
        
          
          <TextField
            autoFocus
            required
            id="filled-password-input"
          label="Password"
          type="password"
            margin="dense"
            
            name="Password"
            
            fullWidth
            variant="standard"
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button variant='text' onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant='contained' onClick={onSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
      
      
      
     
      </>
    
  );
}
export default LoginDialog;
