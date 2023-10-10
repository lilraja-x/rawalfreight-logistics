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
  Section4,
  Main,
  LowerSection
} from './styled-components/StyledComponents'
import './css/styles.css';

export const Sea_AirCT_ATT_Services = ({ id }) => {
  return (
    <div id={id}>
      <Container>
      <Section1>
                <div class="twelve">
                    <h1>Services</h1>
                </div>
        </Section1>
        <Section2>
            <Images>
            <IconImage src="./sea-air-1.png" />
            <IconImage src="./sea-air-2.png" />
            <IconImage src="./sea-air-3.png" />
            </Images>
            <Title><b>Sea/Air Combined Transport</b></Title>
            <Content>
                <p>
                    Air - Sea combined service
                    <br />
                    Sea - Air combined service
                </p>
            </Content>
            <Content>
                <p>
                    Combined transport services give you a
                    seamless transition of carrying vessels where
                    needed so that you get your shipment where
                    it is needed, when it is needed.
                </p>
            </Content>
          </Section2>
          <LowerSection>
            <Main>
                <Section3>
                    <Images>
                        <IconImage src="./afghan-transit-1.png" />
                        <IconImage src="./afghan-transit-2.png" />
                        <IconImage src="./afghan-transit-3.png" />
                    </Images>
                    <Title><b>Afghan Transit Trade</b></Title>
                    <Content>
                        <p>
                            Smooth processing of documents
                            <br />
                            Swift custom clearance at Karachi
                            <br />
                            Efficient handling at Pak-Afghan border
                            <br />
                            Reliable transporter network
                            <br />
                            Daily shipment progress tracking
                            <br />
                            Security deposit facility for standard containers
                        </p>
                    </Content>
                </Section3>
            </Main>
            <Section4>
            <Image
                className='img-ser'
                src='./img-ser-4.png'
                alt='Services Image'
            />
            </Section4>
          </LowerSection>
      </Container>
    </div>
  );
};
