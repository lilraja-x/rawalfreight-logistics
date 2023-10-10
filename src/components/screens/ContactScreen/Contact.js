import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { createGlobalStyle } from 'styled-components';
import Footer from '../../Footer';
import { 
  Container, 
  StyledInput, 
  StyledTextArea,
  Body, 
  Button, 
  InputBox, 
  MessageBox, 
  Content, 
  Title, 
  Para 
} from './styled-components/StyledComponents';

const Contact = () => {
  const GlobalStyle = createGlobalStyle`
    body {
      font-family: 'Ysabeau Infant';
    }
  `;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (name && email && message) {
      const serviceId = 'service_pyvlo4n';
      const templateId = 'template_y1pvfwg';
      const userId = '8MPhECz_uhgA2Sv01';
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => {
          console.log(response);
          setName('');
          setEmail('');
          setMessage('');
          setEmailSent(true);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <Container id="contact-us">
      <GlobalStyle />
      <Content>
        <Body>
          <Title>Send us a message</Title>
          <Para>
            If you have any work for us or any types of queries related to our corporate, you can send me a message from
            here.
          </Para>
          <div id="contact-form">
            <InputBox>
              <StyledInput type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
            </InputBox>
            <InputBox>
              <StyledInput
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputBox>
            <MessageBox>
              <StyledTextArea placeholder="Your message" value={message} onChange={(e) => setMessage(e.target.value)} />
            </MessageBox>
            <Button onClick={submit}>
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>Send</span>
            </Button>
            {emailSent && <span className="visible">Thank you for your message, we will be in touch in no time!</span>}
          </div>
        </Body>
        <Footer />
      </Content>
    </Container>
  );
};


export default Contact;

