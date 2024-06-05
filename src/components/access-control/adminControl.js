import { Navigate } from "react-router-dom";
import { GlobalContext } from "../GlobalContext";
import { useContext } from "react";

export const AdminControl=({children})=>{
    const {isAdmin}= useContext(GlobalContext);
    if(isAdmin){
        return(children);
    }
    return(<Navigate to="/"/>)

}