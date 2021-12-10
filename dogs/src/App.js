import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login/Login';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* Configuração das rotas (Tem que ter o browserRouter por volta de tudo) */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route> {/*Rota para a home. */}
          <Route path="/login/*" element={<Login />}></Route>{' '}
          {/*Rota para o Login. */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
