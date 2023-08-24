import React from 'react';
import './App.css';
import avatar from './assets/images/profilePicLinkedin.jpg'; 


function App() {
  return (
    <div className="portfolio-container">
      <div className="header">
        <img src={avatar} alt="Felipe Pereira Moreno" className="profile-pic"/>
        <h1>Felipe Pereira Moreno</h1>
      </div>
      <div className="content">
      <h2>Contatos</h2>
        <ul>
          <li>Email: seuemail@email.com</li>
          <li>Telefone: (xx) xxxx-xxxx</li>
          <li>LinkedIn: link_para_seu_perfil</li>
          <li>GitHub: link_para_seu_perfil</li>
        </ul>
        <h2>Resumo</h2>
        <p>
          Escreva aqui um breve resumo sobre você, sua formação, experiência e habilidades.
        </p>       
      </div>
    </div>
  );
}

export default App;
