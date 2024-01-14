/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import Canvas from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';
import  Shop  from './pages/Shop';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="app transition-all ease-in">
      {/* <Home />
      <Canvas />
      <Customizer /> */}
      
        <Routes>
        <Route path="/" element={[<Home/>,<Canvas/>,<Customizer/>]} />
        <Route path="/Crosx" element={[<Home/>,<Canvas/>,<Customizer/>]} />
        <Route path="/customizer" element={[<Home/>,<Customizer/>,<Canvas/>]} />
        <Route path="/" element={<Canvas />} />
        <Route path="/shop" element={<Shop />} />
          
        </Routes>
      
    </main>
  )
}

export default App