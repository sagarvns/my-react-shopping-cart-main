import React, {useState} from "react";


const Siformula=()=>{
    const [Item1,setItem1]=useState(0);
    const [Item2,setItem2]=useState(0);
    const [Item3,setItem3]=useState(0);


    const Amount=(item)=>{
        setItem1(Number(item.target.value))
    };
    const Rate=(item)=>{
        setItem2(Number(item.target.value))
    };
    const Time=(item)=>{
        setItem3(Number(item.target.value))
    };




    return(
        <>
        
        <h1>SI Formula</h1>
        <label>Principal Si = </label>
        <input type='text' onChange={Amount}/>

        <label>Rate  = </label>
        <input type='text' onChange={Rate}/>

        <label>Time  = </label>
        <input type='text' onChange={Time}/>

        <h1>{Item1}</h1>
        <h1>{Item2}</h1>
        <h1>{Item3}</h1>

        <h1>Result = {Number (Item1) * Number (Item2) * Number (Item3)}</h1>

        </>


    )
};
export default Siformula;