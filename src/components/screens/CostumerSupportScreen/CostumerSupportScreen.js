import React from 'react';
import {
  IconImage,
  Container,
  Content,
  Title,
  Section1,
  Section2,
  Section3,
  Image,
  Images,
  MainSection
} from './styled-components/StyledComponents'

export const CostumerSupportScreen = ({ id }) => {
  return (
    <Container id={id}>
      <MainSection>
        <Section1>
          <Image 
              className='img-ser'
              src='./img-cs-1.png'
              alt='Services Image'
          />
        </Section1>
        <Section2>
              <Image
                  className='img-ser'
                  src='./img-cs-2.png'
                  alt='Service Image'
              />
          </Section2>
      </MainSection>
        <Section3>
            <div id="div1">
            <Images>
                <IconImage src="./cc-1.png" />
                <IconImage src="./cc-2.png" />
                <IconImage src="./cc-3.png" />
            </Images>
            <Title><b>Customs Clearance (CHB)</b></Title>
            <Content>
                <p>
                    Licensed CHB agent
                    <br />
                    Efficient customs clearance of import and export shipments
                </p>
            </Content>
        </div>
        <div id="div2">
            <Images>
                <IconImage src="./dg-1.png" />
                <IconImage src="./dg-2.png" />
                <IconImage src="./dg-3.png" />
            </Images>
            <Title><b>DG Cargo Handling</b></Title>
            <Content>
                <p>
                    ISO liquid tanks
                    <br />
                    ISO gas tanks
                    <br />
                    Flexi tanks
                    <br />
                    Hazardous goods in dry containers
                </p>
            </Content>
        </div>
        </Section3>
    </Container>
  );
};

