import React from 'react';
import { Link } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <div>
      <Link to="/register">Регистрация</Link>
      <Link to="/login">Логин</Link>
    </div>
  );
}
