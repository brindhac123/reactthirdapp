import { useState } from "react";

function MyForm(){
    //const[name,setName]= useState("");
    //const[age,setAge]= useState("");
    //const[email,setEmail]= useState("");
    //console.log('currentstate',name)
    const[inputs,setInputs]=useState({phone:"+91",email:"@gmail.com",country:"India"})
    function handleSubmit(e){
        e.preventDefault();
        console.log('Form Submitted',inputs)
       // console.log('current state',name,age,email)


    }
    function handleChange(e){
        const name = e.target.name
        const value = e.target.value
        setInputs((previousState)=>{ return {...previousState,[name]:value}})
    }
     return ( 
        <form onSubmit={handleSubmit}>
            <label>Enter Your Name <input type="text" name="name" onChange={handleChange} /></label><br/>
        <label>Enter Your Age <input type="text"  name="age"onChange={handleChange} /></label><br/>
        <label>Enter Your Email <input type="text"  name="email"onChange={handleChange} value={inputs.email}/></label><br/>
        <label>Enter Your Phone <input type="text"  name="phone"onChange={handleChange} value={inputs.phone}/></label><br/>
        <label>Enter Your Country:
        <select name="country" onChange={handleChange} value={inputs.country}>
          <option value="">Select</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
          <option value="Australia">Australia</option>
        </select>
        </label>
        
        <input type="submit" value="Submit Form"/>
                {/*<label>Enter Your Name <input type="text" onChange={(e)=>{setName(e.target.value)}} /></label><br/>
        <label>Enter Your Age <input type="text" onChange={(e)=>{setAge(e.target.value)}} /></label><br/>
        <label>Enter Your Email <input type="text" onChange={(e)=>{setEmail(e.target.value)}} /></label><br/>
        */}
       {/* <label>Enter Your Name <input type="text" onChange={(e)=>{setInputs((previousState)=>{return{...previousState,name:e.target.value}})}} /></label><br/>
        <label>Enter Your Age <input type="text" onChange={(e)=>{setInputs((previousState)=>{return{...previousState,age:e.target.value}})}} /></label><br/>
        <label>Enter Your Email <input type="text" onChange={(e)=>{setInputs((previousState)=>{return{...previousState,email:e.target.value}})}} /></label><br/>
        <input type="submit" value="Submit Form"/>*/}
   </form>
     )
      
}

export default MyForm; 