import React, { useState } from 'react';
import styled from 'styled-components';

const Me = () => {
  const [logic, setLogic] = useState({
    s: true,
    e: false,
    p: false,
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 0 && window.scrollY < 210) {
      setLogic({
        s: true,
        e: false,
        p: false,
      });
    }

    if (window.scrollY >= 210 && window.scrollY < 460) {
      setLogic({
        s: false,
        e: true,
        p: false,
      });
    }

    if (window.scrollY >= 460) {
      setLogic({
        s: false,
        e: false,
        p: true,
      });
    }
  });

  return (
    <DivBg>
      <div>
        <h1>Marlon Silva</h1>
        <h2>Desenvolvedor Web</h2>
        <p>Construo aplicações web utilizando React e outras tecnologias.</p>

        <UlIndice>
          <li>
            <button
              onClick={() => {
                const scrollToPosition = 0;

                window.scrollTo({
                  top: scrollToPosition,
                  behavior: 'smooth',
                });
              }}
            >
              <span
                id="dec"
                style={logic.s ? { width: '55px', background: 'white' } : null}
              ></span>
              <p
                style={
                  logic.s
                    ? { color: 'white' }
                    : { color: 'rgba(255, 255, 255, 0.5)' }
                }
              >
                Sobre
              </p>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                const scrollToPosition = 211;

                window.scrollTo({
                  top: scrollToPosition,
                  behavior: 'smooth',
                });
              }}
            >
              <span
                id="dec"
                style={logic.e ? { width: '55px', background: 'white' } : null}
              ></span>
              <p
                style={
                  logic.e
                    ? { color: 'white' }
                    : { color: 'rgba(255, 255, 255, 0.5)' }
                }
              >
                Experiência
              </p>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                const scrollToPosition = 460;

                window.scrollTo({
                  top: scrollToPosition,
                  behavior: 'smooth',
                });
              }}
            >
              <span
                id="dec"
                style={logic.p ? { width: '55px', background: 'white' } : null}
              ></span>
              <p
                style={
                  logic.p
                    ? { color: 'white' }
                    : { color: 'rgba(255, 255, 255, 0.5)' }
                }
              >
                Projetos
              </p>
            </button>
          </li>
        </UlIndice>
      </div>

      <UlContatos>
        <li>
          <a href="https://github.com/marlonkv" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="rgba(255,255,255,0.6)"
              height="26px"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/marlonkv/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 1000"
              fill="rgba(255,255,255,0.6)"
              height="26px"
            >
              <path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"></path>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/marlon-silva-6031b5242/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(255,255,255,0.6)"
              height="26px"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </a>
        </li>
      </UlContatos>
    </DivBg>
  );
};

const UlIndice = styled.ul`
  list-style: none;
  height: 380px;
  display: grid;
  align-content: start;
  gap: 0.7rem;

  li:first-child {
    margin-top: 4rem;
  }

  button {
    background: none;
    cursor: pointer;
    border: none;
    padding: 0.2rem;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    p {
      font-weight: 700;
      font-size: 0.8rem;
    }
  }

  #dec {
    height: 1.6px;
    width: 23px;
    background-color: gray;
    display: inline-block;
    transition: 0.1s;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const UlContatos = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.5rem;

  svg:hover {
    fill: rgba(255, 255, 255, 1);
    transition: 0.1s;
  }
`;
const DivBg = styled.div`
  color: white;
  z-index: 10;
  display: grid;
  line-height: 30px;
  position: fixed;
  align-content: space-between;
  height: 77vh;
  margin-top: 100px;
  position: fixed;
  padding-left: 4rem;

  * {
    margin: 0px;
    padding: 0px;
  }

  h1 {
    font-size: 3.3rem;
    line-height: 48px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.75);
  }
  h2 {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 48px;
    color: rgba(255, 255, 255, 0.75);
  }
  p {
    font-weight: 400;
    line-height: 20px;
    font-size: 1rem;
    max-width: 30ch;
    color: rgba(255, 255, 255, 0.45);
  }

  div {
    height: 370px;
    @media screen and (max-width: 1000px) {
      height: 0px;
    }
  }

  @media screen and (max-width: 1000px) {
    height: 200px;
    position: relative;
  }

  @media screen and (max-width: 600px) {
    padding-left: 2rem;
    margin-top: 3rem;
    h1 {
      font-size: 2.6rem;
    }
  }
`;

export default Me;
