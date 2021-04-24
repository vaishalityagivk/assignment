import logo from './logo.svg';

import './App.css';

import {useState} from 'react'
import React from 'react';



import store from './stores/store';
import ReduceCounter from './ReduxCounter'
import LineChart_show from './LineChart';


store.subscribe(function(){
  const currentState = store.getState();
  console.log('the current count value is '+currentState.count);

})
store.dispatch({type: 'counter/increase'});
store.dispatch({type: 'counter/increase'});
store.dispatch({type: 'counter/increase'});
store.dispatch({type: 'counter/decrease'});






function App() {
 

  return (
    <div className="App-header">
 <LineChart_show/>
    <ReduceCounter/>

  
    

   
  
    <hr/>
  
    
      
    </div>
  );
}

export default App;
// {// import { Typography,AppBar,Button,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container } from '@material-ui/core';
// // import './App.css';
// // import PhotoCamera from '@material-ui/icons/PhotoCamera';

// // function App() {
// //   return (
// //     <>
// //        <CssBaseline />
// //         <AppBar position ="relative">
        
// //         <Toolbar>
// //         <PhotoCamera/>
// //         <Typography varient ="h6">
// //           Photo Album
// //         </Typography>
// //         </Toolbar>
// //         </AppBar>
// //         <main>
// //         <div>
// //         <Container maxWidth = "sm" style ={{marginTop:"100px"}}>
// //         <Typography varient ="h2" align ="center" color ="textPrimary" gutterBottom>Photo Album
// //         </Typography>
// //         <Typography varient ="h5" align ="center" color="textSecondry" paragraph>
// //         hi this is vaishali today i am going to learn material ui react ,i also need to learn avtar but i am unable to lear so something more interesting .now i days ii ama feel scary with 
// //         </Typography>
// //         <Grid container spacing ={2} justify="center">
// //         <Grid item>
// //         <Button variant ="outlined" color="primary">
// //         Secondry Action
// //         </Button>
// //         </Grid>
// //          <Grid item>
// //         <Button variant ="contained" color="primary">
// //         See My Photo
// //         </Button>
// //         </Grid>
// //         </Grid>
// //         </Container>
// //         </div>
// //         </main>
    
// //     </>
// //   );
// // 

// //export default App;}
