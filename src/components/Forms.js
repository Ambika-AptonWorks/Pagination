import React,{useState} from 'react';
import {Redirect} from "react-router-dom"

function Forms(){
    const Initialvalues={email:'',password:''}
    const[names,setNames]=useState({Initialvalues});
  
    onSubmit=()=>{
        if(userFound){
            return <Redirect to="/DataFetching/"  />
        }
    }
return(
    <div>
        <h2>Form</h2>
        <form>
            <div>
                <label>Email</label>
                <input type="text" name="email" 
                placeholder='Email' value={names.email}
                onChange={e=>setNames({...names,email:e.target.value})}></input>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" 
                placeholder='Password' value={names.password}
                onChange={e=>setNames({...names,password:e.target.value})}></input>
            </div>
            <button onClick={this.onSubmit}>Submit</button>
        </form>
    </div>
 );
};
export default Forms;
