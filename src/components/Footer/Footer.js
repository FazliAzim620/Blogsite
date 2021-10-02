import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {Link,Grid,Button} from "@material-ui/core/";
import {useState}from 'react'


const useStyles = makeStyles((theme) => ({
  footer: {
    
  backgroundColor: theme.palette.background.paper,
  marginTop: theme.spacing(4),
  padding: theme.spacing(6, 0),
  
  },
}));

export default function Footer({ description, title }) {
  const [inputdata, setinputdata]=useState(null);
  const [print,setprint]=useState(false);
  const InputData=(event)=>{
 setprint(false)
 
  
    let newInput=event.target.value;
    if(newInput!==' ')
{
  setinputdata(newInput);
}   
else{
  setinputdata(null)
}

  }
 const PrintForm=(e)=>{
   e.preventDefault();
   setprint(true);
   alert(inputdata)
 

 }

    const classes = useStyles();
  return (
    <footer  className={classes.footer} >
      <Container xs={12} md={12}  >
  <Grid item container spacing={3}>
  <Grid item  xs={6}  md={4}>
     <form action="" onSubmit={PrintForm}>
     <h5>Enter your Name</h5>
     <input type="text"  bgcolor="primary.main"  onChange={InputData} />
    <button type='submit'>Submit</button>
     </form>
        
   
      </Grid>
      <Grid  item xs={6} md={4} lg={4} sm={6}   md={4} >
     
      <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          {description}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Copyright ©{" "}
          <Link color="inherit" href="https://material-ui.com/">
            Your Website
          </Link>{" "}
          {new Date().getFullYear()}.
        </Typography>
  


      </Grid>
      <Grid  item xs={6}  md={4}>{
        print && inputdata!==null? 
   <p>Your Name is {inputdata}</p>:null}
   </Grid>
  </Grid>
      
  </Container>

    </footer>
  );
}