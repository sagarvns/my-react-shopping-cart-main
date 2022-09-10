import React from "react";
function NestedList() {
    // const students=['Sagar','sidddu','sachin','Peter']
    const users =[
        {name:"sagar",email:"jrsagaroo7@gmail.com",address: [
            {HouseNo:"159/D",city:"Varanasi cont",countery:"India"},
            {HouseNo:"151/D",city:"Varanasi jgkgh",countery:"In"},
            {HouseNo:"152/D",city:"Varanasi kgm",countery:"Ind"},
            {HouseNo:"153/D",city:"Varanasi mgm",countery:"Indi"},
            {HouseNo:"157/D",city:"Varanasi jfk",countery:"India"},

        ]},
        {name:"Sachin",email:"stttagaroo7@gmail.com",address: [
            {HouseNo:"159/D",city:"Varanasi cont",countery:"India"},
            {HouseNo:"151/D",city:"Varanasi jgkgh",countery:"In"},
            {HouseNo:"152/D",city:"Varanasi kgm",countery:"Ind"},
            {HouseNo:"153/D",city:"Varanasi mgm",countery:"Indi"},
            {HouseNo:"157/D",city:"Varanasi jfk",countery:"India"},

        ]},
        {name:"Saktiman",email:"jgarhhoo7@gmail.com",address: [
            {HouseNo:"159/D",city:"Varanasi cont",countery:"India"},
            {HouseNo:"151/D",city:"Varanasi jgkgh",countery:"In"},
            {HouseNo:"152/D",city:"Varanasi kgm",countery:"Ind"},
            {HouseNo:"153/D",city:"Varanasi mgm",countery:"Indi"},
            {HouseNo:"157/D",city:"Varanasi jfk",countery:"India"},

        ]},
        {name:"Naman",email:"ssjrsagoo7@gmail.com",address: [
            {HouseNo:"159/D",city:"Varanasi cont",countery:"India"},
            {HouseNo:"151/D",city:"Varanasi jgkgh",countery:"In"},
            {HouseNo:"152/D",city:"Varanasi kgm",countery:"Ind"},
            {HouseNo:"153/D",city:"Varanasi mgm",countery:"Indi"},
            {HouseNo:"157/D",city:"Varanasi jfk",countery:"India"},

        ]}

    ]

    
    return(
        <div className='app'>
            <h1> Nested List  </h1>
            <table>
                <tbody>
                    <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Adress</td>
                    </tr>
                </tbody>
            </table>
            {
                users.map((item)=>

                <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                        {
                            item.address.map((data)=>
                            <tr>
                                <td>{data.HouseNo}</td>
                                <td>{data.city}</td>
                                <td>{data.countery}</td>
                            </tr>

                            )
                        }
                        </td>
                </tr>
                )
            }
           
        </div>
    )
}
export default NestedList;


































