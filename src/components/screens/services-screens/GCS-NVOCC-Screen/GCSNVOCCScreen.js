import React from 'react';
import {
  Image,
  Container,
  Content,
  Section1,
  Section2,
  Section3,
  Section4,
  Title,
  IconImage,
  LowerSection,
  Main,
  Images
} from './styled-components/StyledComponents'
import './css/styles.css'

export const GCS_NVOCC_Screen = ({ id }) => {
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
            <IconImage src="./world-1.png" />
            <IconImage src="./world-2.png" />
            <IconImage src="./world-3.png" />
            </Images>
            <Title><b>Global Consolidation Services</b></Title>
            <Content>
                <p>
                    Sea and air export consolidation
                <br />
                    Sea and air import consolidation
                <br />
                    Buyer's consolidation
                <br />
                    Shipper's consolidation
                </p>
            </Content>
          </Section2>
          <LowerSection>
            <Main>
                <Section3>
                    <Images>
                        <IconImage src="./ship-1.png" />
                        <IconImage src="./ship-2.png" />
                        <IconImage src="./ship-3.png" />
                    </Images>
                    <Title><b>Ocean Services (NVOCC)</b></Title>
                    <Content>
                        <p>
                            Contractual rates with reputed shipping lines
                            <br />
                            No shutouts of containers
                            <br />
                            Fastest transit times
                        </p>
                    </Content>
                </Section3>
            </Main>
            <Section4>
            <Image
                className='img-abt'
                src='./img-ser.png'
                alt='About Image'
            />
            </Section4>
          </LowerSection>
      </Container>
    </div>
  );
};
