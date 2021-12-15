import React from 'react';
import UserHeaderNav from './UserHeaderNav';
import styles from './UserHeader.module.css';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    setTitle(location.pathname);
    const { pathname } = location;
    if ('/conta' === pathname) setTitle('Minha Conta');
    else if ('/conta/estatisticas' === pathname) setTitle('Estatistica');
    else if ('/conta/postar' === pathname) setTitle('Poste sua foto');
    else setTitle('');
  }, [location]);
  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav></UserHeaderNav>
    </header>
  );
};

export default UserHeader;
