import React from "react";
import Cursos from "../src/pages/Cursos";
import Footer from "../src/components/Footer";
import Modulos from "../src/pages/Modulos";
import Aulas from "../src/pages/Aulas";
import Menu from "../src/components/Menu";
import Acompanhamentos from "./pages/Acompanhamentos";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Routes>
          <Route path="/atividades" element={<Cursos />} />
          <Route path="/atividades/acompanhamentos" element={<Acompanhamentos />} />
          <Route path="/atividades/:curso" element={<Modulos />} />
          <Route path="/atividades/:curso/:modulo" element={<Aulas />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
