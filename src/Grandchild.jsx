import React from "react";
import Grandgrandchild from "./Grandgrandchild";
function Grandchild(){
    return <div className="border border-2 border-warning p-2 m-2">
        <h1>Grandchild</h1>
        <Grandgrandchild></Grandgrandchild>
    </div>
}
export default Grandchild