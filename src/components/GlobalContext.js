import { createContext, useState } from "react";
import { AUTHORINFO, BOOKINFO, MemberINFO ,BookRequest} from "../data";
import Author from "../pages/author";


 const GlobalContext= createContext({
    isAdmin:Boolean,
    func:()=>{ },
    showLoginButton:Boolean,
    setshowLoginButton:()=>{},
    Username:"",
    setUser:()=>{},
    password:"",
    setPassword:()=>{},
    BOOKInfo:{},
    MEMBERInfo:{},
    AUTHORInfo:{},
    bookRequestList:{},
    addRequest:()=>{},
    addBook:()=>{},
    deleteBook:()=>{},
    editBook:()=>{},

    addMember:()=>{},
    deleteMember:()=>{},
    editMember:()=>{},

    addAuthor:()=>{},
    deleteAuthor:()=>{},
    editAuthor:()=>{}
   


 });



const GlobalContextProvider = ({children}) => {
const [isAdmin,setisAdmin]=useState(false);
const[Username,setUser]=useState("");
const[password,setPassword]=useState("");




const AUTHORInfo=AUTHORINFO;
const MEMBERInfo=MemberINFO;
const BOOKInfo= BOOKINFO;
const bookRequestList=BookRequest;
const addRequest=(request)=>{
  bookRequestList.push(request);
  console.log(bookRequestList);
}
const addBook=(Book,authorName,bookName)=>{
    BOOKInfo.push(Book);
    
    const index1=AUTHORInfo.findIndex((author)=>{ return author.name===authorName});
    
    console.log(index1,authorName,bookName);

    console.log(AUTHORInfo[index1])
    AUTHORInfo[index1].BookName.push(bookName);
    

   
}
const deleteBook=(index)=>{
BOOKInfo.splice(index,1);     
}
const editBook=(member,id)=>{
  BOOKInfo.splice(id,1)
  BOOKInfo.push(member);
}

const addMember=(member)=>{
  MEMBERInfo.push(member)
}
const deleteMember=(index)=>{
  MEMBERInfo.splice(index,1);
}
const editMember=(member,id)=>{
  MEMBERInfo.splice(id,1);
  MEMBERInfo.push(member);
}


const addAuthor=(author)=>{
  
  AUTHORInfo.push(author);
//   const val= BOOKInfo.map((book)=>(author.name=book.name))
//   // BOOKInfo[val].authorImage= author.image;
// console.log(AUTHORInfo)
}
const deleteAuthor=(index)=>{
  AUTHORInfo.splice(index,1)
}
const editAuthor= (author,id)=>{
  AUTHORInfo.splice(id,1);
  AUTHORInfo.push(author)
}

const func = (value) =>{
    setisAdmin(value)
}
  
  return (
    <GlobalContext.Provider value={{isAdmin,setisAdmin,func, Username,setUser,password,setPassword,addBook,deleteBook,
    addAuthor,addMember,deleteAuthor,deleteMember,BOOKInfo,AUTHORInfo,MEMBERInfo,editBook,editAuthor,editMember,bookRequestList,
    addRequest
    }} >
        {children}
    </GlobalContext.Provider>
  )
}

export  {GlobalContextProvider, GlobalContext}