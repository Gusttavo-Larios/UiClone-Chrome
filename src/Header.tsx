import React from 'react';
import './css/Main.css';
import './css/Header.css';

function Header() {
  return (
    <header className="Header">
      <a href="https://www.google.com.br/imghp?hl=pt-BR&tab=ri&authuser=0&ogbl" className="links" >Imagens</a>
      <a href="https://mail.google.com/" className="links" >Gmail</a>
    </header>
  );
}

export default Header;