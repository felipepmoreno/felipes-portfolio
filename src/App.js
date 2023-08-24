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
          <li>Email: felipepmoreno@gmail.com</li>
          <li>Telefone: +55 (11) 98383-2807</li>
          <li>LinkedIn: https://www.linkedin.com/in/felipe-pereira-moreno-b11207196/</li>
          <li>GitHub: https://github.com/felipepmoreno</li>
        </ul>

        <h2>Resumo Profissional</h2>
        <p>
        Engenheiro de Software com Bacharelado em Ciência da Computação pelo Centro Universitário FEI e formação
        técnica em Engenharia Mecatrônica pelo SENAI.
        Nos últimos 2 anos, utilizou o framework .NET Core (C#) para desenvolver sistemas robustos e Web APIs,
        incluindo sistemas que gerenciavam milhares de mensagens por dia de middlewares. Possui sólido
        entendimento sobre bancos de dados (SQL, MongoDB), serviços de mensagens (Azure Service Bus, Redis,
        RabbitMQ) e ambientes em nuvem (AWS, Azure/Azure DevOps). Experiente no uso do Git, na implementação
        de arquiteturas de software (microserviços, MVC) e com práticas de desenvolvimento (DDD, TDD) em
        ambientes Agile/SCRUM.
        Colaborativo e comprometido em manter fortes relações com colegas, também busca crescimento profissional,
        como demonstrado pela obtenção da certificação Microsoft AZ900. Em busca ativa de um papel desafiador para
        aplicar e expandir ainda mais as habilidades de engenharia de software.
        </p>

      </div>
    </div>
  );
}

export default App;
