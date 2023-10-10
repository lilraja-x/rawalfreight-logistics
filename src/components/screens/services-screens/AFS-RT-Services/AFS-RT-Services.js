import React from 'react';
import {
  Container,
  Content,
  Title,
  IconImage,
  Image,
  Images,
  Section1,
  Section2,
  Section3,
  MainSection
} from './styled-components/StyledComponents'

export const AFS_RT_Services = ({ id }) => {
  return (
    <Container id={id}>
      <MainSection>
      <Section1>
        <Image 
            className='img-ser'
            src='./img-ser-2.png'
            alt='Services Image'
        />
      </Section1>
      <Section2>
            <Image
                className='img-ser'
                src='./img-ser-3.png'
                alt='Service Image'
            />
        </Section2>
        </MainSection>
        <Section3>
            <div id="div1">
            <Images>
                <IconImage src="./air-1.png" />
                <IconImage src="./air-2.png" />
                <IconImage src="./air-3.png" />
            </Images>
            <Title><b>Air Freight Services</b></Title>
            <Content>
                <p>
                    Approved IATA agent
                <br />
                    Choice of best suitable airlines
                <br />
                    Efficient ground handling
                <br />
                    Immediate connections and fast transits
                <br />
                    Competitive pricing
                </p>
            </Content>
        </div>
        <div id="div2">
            <Images>
                <IconImage src="./road-1.png" />
                <IconImage src="./road-2.png" />
                <IconImage src="./road-3.png" />
            </Images>
            <Title><b>Road Transportation</b></Title>
            <Content>
                <p>
                    Inland bonded trucking services
                <br />
                    Nationwide pick-up and delivery
                <br />
                    Time-specific deliveries                
                </p>
            </Content>
        </div>
        </Section3>
    </Container>
  );
};
