import Links from "./Components/LinksComponents/Links";
import Maincards from "./Components/Maincards/Maincards";
import Navbar from "./Components/Navbar/Navbar";
import Signup from "./Components/Signup/Signup";
import Starter from "./Components/Starter/Starter";
import './App.css'
import Maindressshop from "./Components/MainDressshop/Maindressshop";
import Button from "./Components/Button/Button";
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  return (
    <div className="App">
     
      
      <Starter/>
      <Navbar/> 
      <Button/>
      <Maincards/>
      <Signup/>
      <Links/>
      <BrowserRouter>
       <Routes>
        <Route path="/maindressshop" element={<Maindressshop/>}/>
       </Routes>
      
      </BrowserRouter>


     
      
    </div>
  );
}

export default App;
