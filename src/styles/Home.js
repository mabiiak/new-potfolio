import styled from 'styled-components';
import {
  background,
  backgroundSide,
  backgroundCards,
  colorText,
} from './Color';

export const SectionBody = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(-90deg, ${background} 65%, ${backgroundSide} 0%);
  width: 100vw;
  height: 100vh;
`

export const Informations = styled.div`
  align-items: center;
  background-color: ${backgroundCards};
  box-shadow: 5px 10px 7px rgb(0 , 1, 5, 0.5);
  display: flex;
  flex-direction: column;
  margin: 5% 3%;
  padding: 3%;
  width: 18%;

  img {
    border-radius: 50%;
    width: 90%;
  }

  div {
    text-align: center;

    h3, h4 {
      color: ${ colorText };
    }
  }

  #icons {
    flex-direction: row;
    display: flex;
    width: 50%;
  }

  #git {
    width: 100%;
  }
`;

export const Description = styled.div`
  width: 40%;
`
