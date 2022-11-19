import  React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './App.css';

const App=()=> {
  
  const[todos,SetTodos]= useState([])

  const[userinput,Setuserinput]= useState([])

  const addData=()=>{

    SetTodos([...todos, userinput])
  }

const listitems= todos.map((todo)=><li key="{item}">{todo}</li>)
    
  return (
    <div className="App">
      <center>
       <Typography variant="h3" gutterBottom>
    Todo List:
      </Typography> 
        <TextField onChange={(event)=>Setuserinput(event.target.value)}
          label="lists"
          id="outlined-size-small"
          defaultValue="Code"
          size="small"
        />
         <Button onClick={()=>addData()} variant="outlined">Add</Button>
      </center>
      <ol className='list-todo'>{listitems}</ol>
    </div>
  );
}

export default App;
