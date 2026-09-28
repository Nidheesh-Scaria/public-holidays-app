import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/header";
import Home from "./Pages/Home";
import Countries from "./Pages/Countries";
import About from "./Pages/About";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/countries" element={<Countries/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
