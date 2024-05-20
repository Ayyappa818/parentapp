import React from "react";
import Child from "./child";
function Parent(){
    function xyz(){
        alert("this is parent xyz function")
    }
    var [xy,setXy]=React.useState("Ayyappa")
    return <div className="border border-2 border-danger p-2 m-2">
        <h1>Parent:{xy}</h1> 
        <button onClick={()=>{xyz()}}>call Xyz</button>
        <Child x={xy} y={xyz}></Child>
        
    </div>
}
export default Parent 