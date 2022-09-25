import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { Link } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      {isLoggedIn && (
        <>
          <Link to="/contacts">Contacts</Link>
        </>
      )}
    </nav>
  );
};

export default Navigation;
