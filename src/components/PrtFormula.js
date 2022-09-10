import React, { useState } from 'react';

const Formula = () => {
    const [amt1, setAmt1] = useState(0);
    const [amt2, setAmt2] = useState(0);
    const [amt3, setAmt3] = useState(0);
    const amount = (event) => {
        setAmt1(Number(event.target.value));
    };

    const Interst = (event) => {
        setAmt2(Number(event.target.value));
    };   

    const time = (event) => {
        setAmt3(Number(event.target.value));
    };                                      



    return <formula>
        <label>Principal Amount =</label>
        <input type="text" onChange={amount} />
        <label>Rate of Interst = </label>

        <input type="text" onChange={Interst} />
        <label>Time = </label>
        <input type="text" onChange={time} />
     
        <h1>{amt1}</h1>
        <h1>{amt2}</h1>
        <h1>{amt3}</h1>

        <h1> Result= {Number(amt1) * Number(amt2) * Number(amt3)/100} </h1>
    </formula>
}
export default Formula;