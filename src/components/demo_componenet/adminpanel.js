
// import BookLabel from './demo_componenet/book';
// import '../App.css' ;

// import { BOOKINFO } from '../data';
// import TabButton from './demo_componenet/tabbutton';
// import { useState } from 'react';

// function AdminPanel() {
// const[selected, setSelected]=useState();
//     let tabContent= <p>choose crud</p>
   

    
   

//     function handleClick(selectedFunction){
//         setSelected(selectedFunction);
//     }
//      if(selected){
//         tabContent=(
//             <p>{selected}</p>

//         );
//     }
//   return (
//     <div >
//     <section>
//     <h2>
//         Admin panel
//     </h2>
//        {BOOKINFO.map((item)=>(
//         <BookLabel title={BOOKINFO[0].title} isbnNum={BOOKINFO[0].isbn} />
        
//        ))}
//       <TabButton isSelected={selected==='Edit'} onSelect={()=>handleClick("Edit")}>Edit</TabButton>
//       <TabButton isSelected={selected==='Delete'} onSelect={()=>handleClick("Delete")}>Delete</TabButton>
      
      
//       <menu>
//         {tabContent}
//       </menu>
     
//       <BookLabel {...BOOKINFO[1]}/>
//       <TabButton isSelected={selected ==='Edit'} onSelect={()=>handleClick("Edit")}>Edit</TabButton>
//       <TabButton isSelected={selected ==='Delete'} onSelect={()=>handleClick("Delete")}>Delete</TabButton>
//       <menu>
//         {tabContent}
//       </menu>
     
      
           
//     </section>
      
//     </div>
//   );
// }

// export default AdminPanel;