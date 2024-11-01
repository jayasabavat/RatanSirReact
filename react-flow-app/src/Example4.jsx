import { useState } from "react";

function Example4()
{
    const[Apple,setApple]=useState(0)

    return(
        <>
        <h1>Number of apples:{Apple}</h1>
        <p>{Apple===0?"No apples left":"Great! You have some apples"}</p>
        <button style={{color:'red'}}onClick={()=>setApple(Apple+1)}>Add One</button>
        <button style={{color:'red'}}onClick={()=>Apple>0&&setApple(Apple-1)}>Delete One</button>
        <button style={{color:'red'}}onClick={()=>setApple(0)}>Reset</button>
         </>
    )
}
export default Example4;