import React,{useState} from 'react';

function UseState () {
    const nameStateVariable=useState("X");
    const handleClick=() =>{
        nameStateVariable[1]("GeekyShow");
    };


    return(
        <>
        <h1>{nameStateVariable[0]}</h1>
        <button type='button' oneClick={handleClick}>Change</button>
        
        </>
    )

}
export default UseState;