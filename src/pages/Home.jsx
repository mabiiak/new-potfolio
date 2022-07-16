import React from 'react';
import picture from '../images/mabi-picture.jpeg';
import iconGit from '../images/icons-github.png';
import iconLinkedin from '../images/icons-linkedin.png';

function Home() {
  return (
    <>
      <div>
        <img alt='Foto de Mabiane' src={picture} width="100px" />
        <h1>
          Mabiane Polniak
        </h1>
        <h3>
          Desenvolvedora Front-End
        </h3>
        <a href='https://github.com/mabiiak' target="_blank">
          <img alt='icone do gitbub' src={iconGit} width="100px" />
        </a>
        <a href='https://www.linkedin.com/in/mabianepolniak/' target="_blank">
          <img alt='icone do linkedin' src={iconLinkedin} width="100px" />
        </a>
      </div>
    </>
  );
}

export default Home;
