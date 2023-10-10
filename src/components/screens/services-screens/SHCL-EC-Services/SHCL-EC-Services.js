import React from 'react';
import {
  Container,
  Section1,
  IconImage,
  Image,
  Images,
  Content,
  Title,
  Section2,
  Section3,
  Section4,
  LowerSection,
  Main
} from './styled-components/StyledComponents';
import './css/styles.css';


export const SHCL_ET_Services = ({ id }) => {
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
            <IconImage src="./ship-handling-1.png" />
            <IconImage src="./ship-handling-2.png" />
            <IconImage src="./ship-handling-3.png" />
            </Images>
            <Title><b>Ship Handling, Charter & Liner Agency</b></Title>
            <Content>
                <p>
                    Licensed shipping agency
                    <br />
                    Vessel charter service
                    <br />
                    Handling of bulk vessel
                    <br />
                    Global air charter service
                </p>
            </Content>
          </Section2>
          <LowerSection>
            <Main>
                <Section3>
                    <Images>
                        <IconImage src="./exhibition-cargo-1.png" />
                        <IconImage src="./exhibition-cargo-2.png" />
                        <IconImage src="./exhibition-cargo-3.png" />
                    </Images>
                    <Title><b>Exhibition Cargo</b></Title>
                    <Content>
                        <p>
                            Planning and executing worldwide transport to specific requirement by land, sea, air and rail
                            <br />
                            Comprehensive on-site construction and dismantling support
                            <br />
                            Efficient handling at Pak-Afghan border
                            <br />
                            Packing and unpacking assistance
                            <br />
                            Provision and leasing of specialist equipment and personnel
                            <br />
                            Storage and delivery of consumables during the event
                            <br />
                            Administration of paperwork
                        </p>
                    </Content>
                </Section3>
            </Main>
            <Section4>
            <Image
                className='img-ser'
                src='./img-ser-5.png'
                alt='Services Image'
            />
            </Section4>
          </LowerSection>
      </Container>
    </div>
  );
};
