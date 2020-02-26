import React, { Fragment } from 'react';
import Header from './Components/Header';
import Profile from './Components/Profile';
import Footer from './Components/Footer';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  background-color: #fafafa;
  width: 100%;
  height: 100%;
  padding: 0;
`;

function App() {
  return (
    <Fragment>
      <Header/>
      <BackgroundContainer>
        <Profile/>
        <Footer/>
      </BackgroundContainer>
    </Fragment>
  );
}

export default App;
