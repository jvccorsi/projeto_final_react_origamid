import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import { UserStorage } from './UserContext';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './Components/User/User';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import Photo from './Components/Photo/Photo';

function App() {
  return (
    <div>
      {/* Configuração das rotas (Tem que ter o browserRouter por volta de tudo) */}
      <BrowserRouter>
        <UserStorage>
          {/* Passo as infos no value do context para conseguir usar  */}
          {/* Todas as infos que estiverem no context Storage (infos globais), vou conseguir usar no app */}
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route> {/*Rota para a home. */}
            <Route path="login/*" element={<Login />}></Route>
            <Route path="foto/:id" element={<Photo />}></Route>
            <Route
              path="conta/*"
              element={
                <ProtectedRoute>
                  <User></User>
                </ProtectedRoute>
              }
            ></Route>
            {/*Rota para o Login. */}
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
