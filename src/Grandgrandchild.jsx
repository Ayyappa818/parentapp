import React, { useContext } from "react";
import { Mycontext } from "./Mycontext";
function Grandgrandchild(){
    var x=useContext(Mycontext)
    return <div className="border border-2 border-success p-2 m-2">
        <h1>Grandgrandchild,{x}</h1>
    </div>
}
export default Grandgrandchild