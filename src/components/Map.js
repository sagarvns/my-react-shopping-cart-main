import { useState }  from "react";


function Map(props) {
    const shoot = () => {
        alert("Great Shot!");
          
      }


      const [name, setName] = useState(props.n);

      const handleSubmit = (event) => {
      event.preventDefault();
    alert(`The name you entered was: ${name}`);
  }
      return (
        <>

        <h2> I am a { props.name }!</h2>
        
<button onClick={()=>{setName("Sidhu")}}>Take the shot!</button> 



  <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input type="text"  value={name} onChange={(e) => setName(e.target.value)}/>
      </label>

     <button onClick={()=>{setName("Sidhu")}}></button>

    </form>


        </>

    
        
    );
  }
  export default Map;   
  