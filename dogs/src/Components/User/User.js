import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserHeader from './UserHeader';
import Home from '../Feed/Home';
import UserPhoto from './UserPhoto';
import UserStats from './UserStats';

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="postar" element={<UserPhoto />}></Route>
        <Route path="estatistica" element={<UserStats />}></Route>
      </Routes>
    </section>
  );
};

export default User;
