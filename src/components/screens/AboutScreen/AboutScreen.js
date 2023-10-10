import React from 'react';
import { 
  Container, 
  Section1, 
  Section2, 
  Section3, 
  RightSection, 
  Title, 
  Image, 
  Content 
} from './styled-components/StyledComponents';

export const AboutScreen = ({ id }) => {
  return (
    <Container id={id}>
      <Section1>
        <Title><b>What will you move next...</b></Title>
        <Content>
          <p className='text-one'>
            Move it with us and experience synchronized shipping
            that meets your objectives like clockwork! Our
            well-groomed and highly motivated team will stay at
            your disposal to help out with a hassle-free 'movement'
            in a very timely fashion.
          </p>
          <p className='text-two'>
            In the global freight management and logistics industry,
            Dynamic Shipping gains its strength by realizing that
            growth is not just a product of what you do but indeed
            how you do it. Our company today is at the forefront
            because of this deep-rooted commitment to achieving
            the highest standards and our practice of being systematic
            about it.
          </p>
          <p className='text-three'>
            Dynamic Shipping is by far the largest logistics provider
            in the country with offices in all major trading cities
            offering global coverage through an extensive network
            of well-reputed agents all over the world. We are an
            ISO 9008:2000 certified organization ensuring that all
            your requirements are effectively met with an
            international standard.
          </p>
        </Content>
      </Section1>
      <RightSection>
        <Section2>
          <Content style={{ color: 'white' }}>
            <ul className='list-ma'>
              <li>State-of-the-art systems</li>
              <li>Tailored SOPs per client's requirement</li>
              <li>Special arrangements for space and rates with major sea and air carriers</li>
              <li>Efficient service for DDU/DDP shipments</li>
              <li>Regular trucking throughout Pakistan</li>
              <li>Afghan Transit Trade via trucking service from Karachi seaports</li>
            </ul>
          </Content>
        </Section2>
        <Section3>
          <Image
            className='img-abt'
            src='./img-abt.png'
            alt='About Image'
          />
        </Section3>
      </RightSection>
    </Container>
  );
};


