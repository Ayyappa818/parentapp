import React, { useContext } from "react";
import Grandchild from "./Grandchild";
import { Mycontext } from "./Mycontext";
function Child(props){
    const mydetail={
        firstname:"Ayyappa",
        Age:"23"
      }
     var ff=useContext(Mycontext)
        function abc(){
            alert("hi Ayyappa")
        }
    
    return <div children className="border border-2 border-secondary p-2 m-2">
        <h1>Child{props.x},{ff}</h1>
        <button onClick={()=>{abc()}}>call abc</button>
        <button onClick={()=>{props.y()}}>call xyz</button>
        <Grandchild></Grandchild>
    </div>
}
export default Child