import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserHeader from './UserHeader';
import Feed from '../Feed/Feed';
import UserPhoto from './UserPhoto';
import UserStats from './UserStats';
import UserContext from '../../UserContext';
import NotFound404 from '../NotFound404';

const User = () => {
  const { data } = React.useContext(UserContext);
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id}></Feed>}></Route>
        <Route path="postar" element={<UserPhoto />}></Route>
        <Route path="estatistica" element={<UserStats />}></Route>
        <Route path="*" element={<NotFound404 />}></Route>
      </Routes>
    </section>
  );
};

export default User;
