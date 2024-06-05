import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import imthemind from "../../image_books/imthemind.jpg";
import "../../App.css"

function MultiActionAreaCard(props) {

  function IssueFunction(){
    return(<div></div>);
  }
  function ReturnFunction(){
    return(<div></div>);
  }
  return (
    
    <Card sx={{ display:'flex', flexDirection: 'column' , maxWidth: 250, margin:2, marginTop:10 }} >
      <CardActionArea >
        <CardMedia
          component="img"
          height="200"
          sx={{objectFit:'fit'}}
          image={imthemind}
          alt="green iguana"
         
        />
        <CardContent>
          <Typography gutterBottom variant="body1" component="div">
           Name: {props.title} 
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            ISBN: {props.isbn} 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Description: {props.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Status: {props.Status}
          </Typography>
           <Typography variant="body2" color="text.secondary">
            Quantity: {props.quantity}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Author: {props.authorName}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={IssueFunction}>
          ISSUE
        </Button>
        <Button size="small" color="primary" onClick={ReturnFunction} >
          RETURN
        </Button>
        <Button size="small" color="primary">
          VIEW
        </Button>
      </CardActions>
    </Card>
  );
}

export default MultiActionAreaCard;