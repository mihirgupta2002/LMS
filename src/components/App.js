
import ButtonAppBar from './Appbarmui';
// import '@cloudscape-design/global-styles/index.css';
import { Route,Router,Routes,useNavigate } from 'react-router-dom';
import View from '../pages/view';
import Admin from '../pages/admin';
import Edit from '../pages/edit';
import Author from '../pages/author';
import User from '../pages/user';
import { Navigate } from 'react-router-dom';
import BookTableCE from '../pages/bookListMui';
import Modal from '@cloudscape-design/components/modal';
import ModalCE from './model';
import '../App.css' ;
// import { GlobalContext } from './GlobalContext';

import { useContext, useState } from 'react';
import Button from '@cloudscape-design/components/button';
import {GlobalContextProvider} from './GlobalContext';
import { useEffect } from 'react';

// const Names=["Aapka Library Management System","Library Management System", "Best Library Management System"];
// const Nameslength= Names.length;
// function randomNum(max){
//   return Math.floor(Math.random()*(max+1));
// }
// const titleNames=["imthemind","second book","third book"];now using data.js file
function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    function handleMove(e) {
      setPosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener('pointermove', handleMove);
    return () => {
      window.removeEventListener('pointermove', handleMove);
    };
  }, []);

 
  return (
    <div>
    
      {/* <header >
      {Names[randomNum(Nameslength)]}<button>Login</button>
      </header> */}
      {/* <Login /> */}
      {/* <p>
        {BOOKINFO.map((item)=>(
          <BookLabel key={item.isbn} {...item}/>))
        }
      </p> */}
      
      {/* {BOOKINFO.map((item)=>(
        <MultiActionAreaCard key={item.isbn} {...item} />
      ))} */}

       
       {/* <Router> */}


       
       {/* <GlobalContext.Provider value={GLobalV} > */}
        <GlobalContextProvider>
              <ButtonAppBar />
        </GlobalContextProvider>

        {/* </GlobalContext.Provider>     */}
             {/* <Button>Modal<ModalCE>ModalApp</ModalCE>  </Button>   */}
       
        
       {/* </Router> */}
        
       


      
      
      {/* <ButtonAppBar/> */}
      {/* <BookLabel title={BOOKINFO[0].title} isbnNum={BOOKINFO[0].isbn} /> method 1 and method 2
      <BookLabel {...BOOKINFO[1]}/> */} 
      {/* <IssuedBooks/> */}
       {/* <AdminPanel/> */}
      
    </div>
  );
}

export default App;
