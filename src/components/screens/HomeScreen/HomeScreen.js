import React from 'react';
import {
  Button,
  Container,
  Main,
  Title,
  Text,
  FadeIn,
  ButtonWrapper,
  RigthSide
} from './styled-components/StyledComponents';
import './css/style.css';

export const HomeScreen = ({ id }) => {

  return (
    <Container id={id}>
      <Main>
        <FadeIn>
          <div className='fade-in'>
            <Title>Efficient Global Cargo Shipping</Title>
            <Text>Ship your goods across the world with ease</Text>
            <ButtonWrapper>
              <Button href='#contact-us'>
                <span className='btn'>Contact Us</span>
              </Button>
              <a href='#mission' className='btn2'>
                <span>Learn More</span>
              </a>
            </ButtonWrapper>
          </div>
        </FadeIn>
      </Main>
      <RigthSide>
        <div className='vista-create-share' data-vista-create-id='64a82d4af163ebee1c33d480'>
          <img src='./gr-content.png' style={{'width': '100%', 'height': '100%'}} alt="Corporate Flyer"/>
        </div>
      </RigthSide>
    </Container>
  );
};
