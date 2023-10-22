import React from 'react';
import styled from 'styled-components';

const Projeto = ({ img, titulo, texto, tecnologia, link }) => {
  return (
    <DivBg href={link} target="_blank">
      <DivImg>
        <img src={img} alt="" />
      </DivImg>
      <DivInfo>
        <h1>{titulo}</h1>
        <p>{texto}</p>
        <ul>
          {tecnologia.map(({ t }) => (
            <div>
              <li>{t}</li>
            </div>
          ))}
        </ul>
      </DivInfo>
    </DivBg>
  );
};

const DivInfo = styled.div`
  width: 300px;
  display: grid;
  gap: 0.5rem;
  align-items: center;

  h1 {
    font-size: 1.2rem;
    font-weight: 500;
  }
  p {
    font-weight: 400;
  }
  ul {
    list-style: none;
    display: flex;
    gap: 0.9rem;
    font-size: 0.8rem;
    margin-top: 8px;

    li {
      background: rgba(255, 255, 255, 0.2);
      padding: 0.3rem 0.8rem;
      border-radius: 1rem;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;
const DivImg = styled.div`
  height: 80px;
  width: 150px;
  background-color: gray;
  border-radius: 0.3rem;
  overflow: hidden;

  img {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;
const DivBg = styled.a`
  display: flex;
  width: 470px;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 1.8rem;
  border-radius: 0.5rem;
  transition: 0.15s;
  text-decoration: none;
  background-color: rgba(255, 255, 255, 0.05);

  * {
    padding: 0px;
    margin: 0px;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.09);

    transition: 0.1s;
    cursor: pointer;
  }

  h1 {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.1rem;
  }

  p {
    color: rgba(255, 255, 255, 0.4);
    font-size: 0.9rem;
    line-height: 20px;
    max-width: 34ch;
  }

  @media screen and (max-width: 600px) {
    padding: 20px;
    width: max-content;
  }
`;

export default Projeto;
