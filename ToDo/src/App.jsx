/* eslint-disable no-unused-vars */
import Form from "./components/Form";
import Help from "./components/Help";
import Navigation from "./components/Navigation";
import ToDoContainer from "./components/ToDoContainer";
import ToDonesContainer from "./components/ToDonesContainer";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
   <BrowserRouter>
    <div className="app">
        <Navigation/>
     
     
     <Routes>
    <Route path="/" element={
      <>
       <Form/>
     <div className="container">
        <ToDoContainer/>
        <ToDonesContainer/>
      </div>
      </>
    }
    />
    <Route path="/help" element={
      <Help/>
    }/>
     
     </Routes>
    </div>
   </BrowserRouter>
   
    
  );
}

export default App;
