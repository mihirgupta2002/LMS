import React from 'react';
import '../App.css'; // Import CSS file for styling
import { AUTHORINFO } from '../data';
const LibraryCard = (props) => {
  const{title,authorName,isbn,id,quantity,description,image,selectedClick,bookIssue, authorImage}=props;
  console.log(authorName)

  return (
    <div className={`library-card ${props.className}`}>
    {AUTHORINFO?.map((author) => author.name === authorName ?(
      <>
      <div className='bookContainer'>
        <img src={image} alt={title} className="book-image"/>
        <img src={author.name === authorName ? author.image : null} alt={authorName} className="circle-image" />
        
        </div>
        <div className="card-content">
          <header className="book-title"><em><i> {title}</i></em></header>
          <header style={{marginTop:"10px"}}>Isbn: {isbn}</header>
          <header style={{marginTop:"10px"}}>Author:{authorName}</header>
          <header style={{marginTop:"10px"}}>Quantity:{quantity}</header>
          <p style={{marginTop:"10px", marginBottom:"5px"}} className="book-description">{description}</p>
          <h6 style={{color:"#00b4d8" , marginTop:"1px"}}>.<button className="view-button" style={{right:"80px"}} onClick={bookIssue}>Issue</button>
          
          <button className="view-button" onClick={selectedClick}>View</button></h6>
          
          
        </div>
        </>
      
    ) : <div></div>)}
    </div>
  );
};

export default LibraryCard;
