import React from 'react';
import styled from 'styled-components';
import Projeto from './infoComponents/Projeto';
import pdf from './test.pdf';
import imgn from './midia/iCloudClone.png';

const Info = () => {
  return (
    <DivBg>
      <TextDiv>
        <p>
          Olá, me chamo Marlon, tenho 19 anos e no momento resido em Paraty, Rio
          de Janeiro. Gosto de aprender coisas novas e tenho genuíno interesse
          pela área de tecnologia e desenvolvimento de aplicações web.
        </p>
        <p>
          Até o presente momento, não tive experiência profissional como
          desenvolvedor. Atualmente, ocupo a posição de analista de sistemas em
          uma{' '}
          <span>
            <a href="https://www.instagram.com/mso_medicinaocupacional/">
              empresa de medicina ocupacional
            </a>
          </span>
          . No entanto, estou ansioso por minha primeira oportunidade nessa
          área.
        </p>
      </TextDiv>

      <span>
        <a href={pdf}>Ver Currículo Completo</a>
      </span>
      <UlProjetos>
        <li>
          <Projeto
            titulo="Interface de Login do iCloud"
            texto="Pequena aplicação web criada de estudos/testes na usabilidade da interface gráfica de login do serviço iCloud da Apple."
            img={imgn}
            tecnologia={[{ t: 'React' }, { t: 'TypeScript' }]}
            link={'https://marlonkv.github.io/iCloudClone/'}
          />
        </li>
      </UlProjetos>
    </DivBg>
  );
};

const TextDiv = styled.div`
  @media screen and (min-width: 1000px) {
    display: grid;
    gap: 3rem;
  }

  p {
    font-weight: 400;
    font-size: 1.05rem;
    margin: 0px;
    color: rgba(255, 255, 255, 0.45);
    line-height: 27px;

    @media screen and (max-width: 600px) {
      font-size: 0.9rem;
      line-height: 25px;
    }

    span {
      a {
        color: white;
        text-decoration: none;
      }
    }
  }
  & > span {
    a {
      font-weight: 500;
      color: white;
      text-decoration: none;
      border-bottom: 1.7px solid white;
      padding-bottom: 0.1rem;
    }
  }

  @media screen and (max-width: 1000px) {
    p:first-child::before {
      content: 'Sobre Mim';
      display: block;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 0.9rem;
      padding-bottom: 0.9rem;
      color: rgba(255, 255, 255, 0.7);
      margin-top: 1.8rem;
    }
    p:last-child:before {
      content: 'Experiência';
      display: block;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 0.9rem;
      padding-bottom: 0.9rem;
      color: rgba(255, 255, 255, 0.7);
      margin-top: 1.8rem;
    }
  }
`;
const UlProjetos = styled.ul`
  padding: 3.5rem 0;
  display: grid;
  gap: 2rem;
  list-style: none;
  justify-items: center;

  @media screen and (max-width: 1000px) {
    justify-items: left;

    &::before {
      content: 'Projetos';
      display: block;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;
const DivBg = styled.div`
  color: white;
  z-index: 10;
  max-width: 50ch;
  display: grid;
  align-content: start;
  gap: 1.5rem;
  padding: 6.5rem 2rem 0 2rem;
  margin-left: 44%;

  @media screen and (max-width: 1000px) {
    padding: 2rem 4rem;
    margin: 0 auto;
    max-width: 87%;
  }

  @media screen and (max-width: 600px) {
    overflow-wrap: break-word;
    white-space: pre-wrap;
    padding: 2rem;
  }
`;

export default Info;
