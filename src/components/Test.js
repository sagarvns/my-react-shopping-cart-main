import React,{useState} from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import DeleteIcon from '@mui/icons-material/Delete';

 function Test() {

    const[num1,setNum1]=useState(0);
    //const[num,setNum]=useState(0);
    const[num2,setNum2]=useState(0)
     const[num3,setNum3]=useState(0)
       
       
   const addNum1=()=>{
    
       setNum1(num1 + 1);
            
   }
   const removeNum=()=>{
    
    setNum1(0);
        
}


    const prevNum1=()=>{
        
       if(num1 > 0) {
       
       setNum1(num1 - 1);
       
   } else {
        //  alert('Sorry,zero limit reacted');
       setNum1(0);
       
    }
}; 

const addNum2=()=>{
    
    setNum2(num2 + 1);
        
}
const removeNum1=()=>{
    
    setNum2(0);
        
}


 const prevNum2=()=>{
     
    if(num2 > 0) {
    
    setNum2(num2 - 1);
    
} else {
     //  alert('Sorry,zero limit reacted');
    setNum2(0);
    
 }
}; 


const addNum3=()=>{
    
    setNum3(num3 + 1);
        
}
const removeNum2=()=>{
    
    setNum3(0);
        
}


 const prevNum3=()=>{
     
    if(num3 > 0) {
    
    setNum1(num3 - 1);
    
} else {
     //  alert('Sorry,zero limit reacted');
    setNum3(0);
    
 }
}; 


  return (<>
    <div className='rowcontainer'>
      <div className='columncontainer'><img src="https://images.dominos.co.in/Paneer.jpg" alt=""></img>
      <div className='content'><h3>Paneer Paratha Pizza</h3>
      <p>
      An epic fusion of paratha and pizza <br/> with melting cheese & soft paneer <br/> fillings to satisfy all your indulgent.. 
      </p>
      {/* <input type="button" value="Add To Card" onClick={alert}></input> */}
      
      <button>{[num1]}</button>
      
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
  <Button onClick={prevNum1}>-</Button>
  <Button onClick={removeNum}><DeleteIcon/></Button>
  <Button onClick={addNum1} >+</Button>
</ButtonGroup>
      </div>
      </div>



      <div className='columncontainer'><img src="https://images.dominos.co.in/Keema.jpg" alt=""></img>
      <div className='content'><h3>Chicken Keema Paratha Pizza</h3>
      <p>
      Flavourful & meaty chicken keema <br/> paratha and goodness of cheesy pizza <br/> coming together in an epic crossover!

      </p>
      {/* <input type="button" value="Add To Card"></input> */}
      <button>{[num2]}</button>
      
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
  <Button onClick={prevNum2}>-</Button>
  <Button onClick={removeNum1}><DeleteIcon/></Button>
  <Button onClick={addNum2}>+</Button>
</ButtonGroup>
      </div>
      </div>
    



      <div className='columncontainer'><img src="https://images.dominos.co.in/PIZ0171.jpg" alt=""></img>
      <div className='content'><h3>The 4 Cheese Pizza</h3>
      <p>
      Cheese Overloaded pizza with 4 <br/> different varieties of cheese and 4 <br/> times the cheese of a normal pizza,.. 
      </p>
      {/* <input type="button" value="Add To Card" ></input> */}
      <button>{[num3]}</button>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
  <Button onClick={prevNum3}>-</Button>
  <Button onClick={removeNum2}><DeleteIcon /></Button>
  <Button onClick={addNum3}>+</Button>
</ButtonGroup>
      </div>
      </div>
      </div>

    </>
  );
};
 
 
export default Test;