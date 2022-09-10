import React from "react";
function Array() {
    // const students=['Sagar','sidddu','sachin','Peter']
    const students =[
        {name:"sagar",email:"jrsagaroo7@gmail.com",contact:9795464849},
        {name:"Sachin",email:"stttagaroo7@gmail.com",contact:979555849},
        {name:"Saktiman",email:"jgarhhoo7@gmail.com",contact:9755564849},
        {name:"Naman",email:"ssjrsagoo7@gmail.com",contact:9755664849}

    ]

    
    return(
        <div className='app'>
            <h1>Handle Array With List </h1>
            <table>
                <tbody>
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td>contact</td>
            </tr> 

            {
                students.map((data,i)=>
                
                <tr key={i}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.contact}</td>
                </tr> 
                )
            }
            </tbody>
            </table>
        </div>
    )
}
export default Array;