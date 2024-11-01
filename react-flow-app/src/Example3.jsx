import { useState } from "react";

function Example3()
{
    const[Score,setScore]=useState(0)

    return(
        <>
        <h1>Cricket score:{Score}</h1>
        <button style={{color:'red'}}onClick={()=>setScore(Score+1)}>+1</button>
        <button style={{color:'red'}}onClick={()=>setScore(Score+2)}>+2</button>
        <button style={{color:'red'}}onClick={()=>setScore(Score+3)}>+3</button>
        <button style={{color:'red'}}onClick={()=>setScore(Score+4)}>+4</button>
        <button style={{color:'red'}}onClick={()=>setScore(Score+6)}>+6</button>
        </>
    )
}
export default Example3;