import React from 'react';
import { Link } from 'react-router-dom';
import { SectionBody, Informations, Description } from '../styles/Home';
import picture from '../images/mabi-picture.jpeg';
import iconGit from '../images/icons-github.png';
import iconLinkedin from '../images/icons-linkedin.png';

function Home() {
  return (
    <SectionBody>
      <Informations>
        <img alt='Foto de Mabiane' src={picture} />
        <div>
          <p> Mabiane Polniak </p>
          <p id='sub-title'> Desenvolvedora Front-End </p>
        </div>
        <div id="icons">
          <a id='git' href='https://github.com/mabiiak' target="_blank" rel="noreferrer">
            <img alt='icone do gitbub' src={iconGit} width="100px" />
          </a>
          <a href='https://www.linkedin.com/in/mabianepolniak/' target="_blank" rel="noreferrer">
            <img alt='icone do linkedin' src={iconLinkedin} width="100px" />
          </a>
        </div>
      </Informations>
      <Description>
        <p id='title'>Olá</p>
        <p>
          Meu nome é Mabiane, moro em Curitiba. Tenho
          Já trabalhei com atendimento ao cliente e vendas, e com isso descobri que eu gosto de ajudar outras pessoas. <br/><br/>

          Atualmente sou Desenvolvedora Fron-End e estudo Desenvolvimento Web na Trybe.
        </p>
        <Link to='/projects'>Projetos</Link>
      </Description>
    </SectionBody>
  );
}

export default Home;
