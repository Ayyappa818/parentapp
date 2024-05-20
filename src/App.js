import React from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './parent';
import { Mycontext } from './Mycontext'; 
function App() {
  var[name,setName]=React.useState("Edupoly")
  return (
  <Mycontext.Provider value={"code your career"}>
  <div  className="border border-2 border-primary p-2 m-2">
      <h1>App:{name}</h1>
      <Parent></Parent>
    </div>
    </Mycontext.Provider>
  )
}

export default App;
