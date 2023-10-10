import React from 'react';
import {
  Container,
  Title,
  Section1,
  Section2,
  Section3,
  Image,
  Content,
  MainSection,
  Item
} from './styled-components/StyledComponents'

export const MissionScreen = ({ id }) => {
  return (
    <Container id={id}>
      <MainSection>
      <Section1>
        <Item>
        <Title><b>Our mission</b></Title>
        <Content>
            <p className='text-one'>
                To remain a recognised industry leader through an
                uncompromising integrity and total commitment to
                customer service.
            </p>
            <p className='text-two'>
                To develop our people, systems and communication for
                a sustained growth and profitability of the organisation.
                From this mission our core values are derived...
            </p>
        </Content>
        </Item>
      </Section1>
      <Section2>
            <Image
                className='img-abt'
                src='./img-msn.png'
                alt='Mission Image'
            />
        </Section2>
        </MainSection>
      <Section3>
        <Content>
            <Title>Speed</Title>
            <Content>
                <p>
                    Nonstop service with a nonstop flow of
                    information ensures fast and fluid mobility
                    of your cargo. Web or phone based tracking
                    keeps you up to date about the shipments
                    current status.
                </p>
            </Content>
            <Title>Efficiency</Title>
            <Content>
                <p>
                    There is a big difference between delivering
                    shipments and delivering excellence.
                    Everyday, we strive to do our job in the best
                    manner physically possible.
                </p>
            </Content>
            <Title>Integrity</Title>
            <Content>
                <p>
                    A continued fast and efficient service is only
                    sustainable with a high degree of integrity
                    both in the corporate management and the
                    mobility team of the company. Fairness and
                    honesty is the principle guideline at Dynamic.
                </p>
            </Content>
        </Content>
      </Section3>

    </Container>
  );
};

