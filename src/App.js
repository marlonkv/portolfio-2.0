import { useState } from 'react';
import styled from 'styled-components';
import Me from './Me';
import Info from './Info';

function App() {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  function test(e) {
    setTop(e.clientY);
    setLeft(e.clientX);
  }

  return (
    <>
      <DivBg onMouseMove={test}>
        <DivStruct>
          <Me />
          <Info />
        </DivStruct>
        <DivMouse
          style={{ top: `${top - 310}px`, left: `${left - 330}px` }}
        ></DivMouse>
      </DivBg>
    </>
  );
}

const DivStruct = styled.div`
  max-width: 1100px;
  display: flex;
  margin: 0 auto;
  z-index: 10;
  justify-content: space-between;

  @media screen and (max-width: 1000px) {
    display: grid;
  }
`;

const DivMouse = styled.div`
  filter: blur(70px);
  background-color: #111f41;
  height: 280px;
  width: 280px;
  border-radius: 100%;
  position: fixed;
  border: 190px solid #0e1a36;
  opacity: 100%;
`;

const DivBg = styled.div`
  position: relative;
  height: 100vh;
  font-family: 'Inter';
`;

export default App;
