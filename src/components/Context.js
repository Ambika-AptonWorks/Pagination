import React,{useState,createContext,useContext} from 'react'

const userContext=createContext();

function Component1() {
    const [user, setUser]=useState("AMBIKA");
    return(
        <div>
            <h1>{'hello ${user}'}</h1>
            <Component2 user={user} />
        </div>
    );
}
function Component2() {
 return(
    <>
    <h1>Component2</h1>
    <Component3 />
    </>
 ); 
}
function Component3() {
    return(
       <>
       <h1>Component3</h1>
       <Component4 />
       </>
    ); 
   }
   function Component4() {
    return(
       <>
       <h1>Component4</h1>
       <Component5 />
       </>
    ); 
   }
   function Component5(){
       const user=useContext(userContext);
       return(
           <>
           <h1>Component 5</h1>
           <h2>{'hello ${user} again '}</h2>
           </>
       );
   }


export default Context;