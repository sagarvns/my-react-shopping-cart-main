import React,{useState} from "react";

const Addarray = () =>{

    var [arr,setarr]=useState(['sagar','chauhan','Singh'])

    const Myfunc=() =>{
        console.log(arr);
        arr.push("Samrat")
        setarr([...arr])
        console.log(arr);
    };
    return(
        <section>
        <div className='app'>

            <h1>Handle Array With List </h1>
            
             <button type='button' onClick={Myfunc}>Change</button>
             
             {
                arr.map((val,i)=>
                <div key={'arr' + i.toString()}>
                    {val}

                </div> 
                )
             }
          
           
        </div>
        </section>
    )

}
export default Addarray;