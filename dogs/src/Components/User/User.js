import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserHeader from './UserHeader';
import Feed from '../Feed/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import UserContext from '../../UserContext';
import NotFound404 from '../NotFound404';
import Head from '../Helper/Head';

const User = () => {
  const { data } = React.useContext(UserContext);
  return (
    <section className="container">
      <Head title="Minha conta" />

      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id}></Feed>}></Route>
        <Route path="postar" element={<UserPhotoPost />}></Route>
        <Route path="estatisticas" element={<UserStats />}></Route>
        <Route path="*" element={<NotFound404 />}></Route>
      </Routes>
    </section>
  );
};

export default User;
