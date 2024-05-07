import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Addtask from "./Addtask";
import { ToastContainer } from "react-toastify";

function App() {
 
  return (
    <>
      <ToastContainer />
      <Addtask />
    </>
  );
}

export default App;
