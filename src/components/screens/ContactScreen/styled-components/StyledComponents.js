import styled from "styled-components";

export const Container = styled.div`
  margin-top: 40px;
  width: 100%;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  margin: 40px auto;
  
  margin-bottom: 0px;
  @media (max-width: 768px) {
    height: auto;
    width: auto;
    margin-right: auto;
    margin-left: 0%;
  }
  }
  
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
  @media (max-width: 768px) {
    height: auto;
    width: auto;
    margin-right: auto;
    margin-left: 0%;
  }
`;

export const Body = styled.div`
  width: 100%;
  margin-left: 75px;
  margin-bottom: 0%;
`;

export const Title = styled.div`
  width: 90%;
  margin-top: 50px;
  margin-left: 20px;
  color: #062e61;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Para = styled.div`
  width: 100%;
  margin-left: 1px;
  font-size: 15px;
  margin-bottom: 10px;
`;

export const InputBox = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  position: relative;
`;

export const StyledInput = styled.input`
  width: 25%;
  border: none;
  padding: 1rem;
  border-radius: 1rem;
  background: #e8e8e8;
  box-shadow: 20px 20px 20px #ffffff, -20px -20px 60px #ffffff;
  transition: 0.3s;
  marin-left: 20px;
  margin-bottom: 10px;

  &:focus {
    outline-color: #e8e8e8;
    background: #e8e8e8;
    box-shadow: inset 20px 20px 60px #ffffff, inset -20px -20px 60px #ffffff;
    transition: 0.3s;
  }
`;

export const MessageBox = styled.div`
  position: relative;
`;

export const StyledTextArea = styled.textarea`
  height: 50%;
  width: 70%;
  border: none;
  padding: 1rem;
  border-radius: 1rem;
  background: #e8e8e8;
  box-shadow: 20px 20px 60px #ffffff, -20px -20px 60px #ffffff;
  transition: 0.3s;
  marin-left: 20px;
  margin-bottom: 10px;

  &:focus {
    outline-color: #e8e8e8;
    background: #e8e8e8;
    box-shadow: inset 20px 20px 60px #ffffff, inset -20px -20px 60px #ffffff;
    transition: 0.3s;
  }
`;

export const Button = styled.button`
  font-family: inherit;
  font-size: 20px;
  background: #062e61;
  color: white;
  padding: 0.7em 1em;
  padding-left: 0.9em;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 16px;
  margin-bottom: 15px;
  overflow: hidden;
  transition: all 0.2s;

  span {
    display: block;
    margin-left: 0.3em;
    transition: all 0.3s ease-in-out;
  }

  svg {
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
  }

  &:hover .svg-wrapper {
    animation: fly-1 0.6s ease-in-out infinite alternate;
  }

  &:hover svg {
    transform: translateX(1.2em) rotate(45deg) scale(1.1);
  }

  &:hover span {
    transform: translateX(1.5em);
  }

  @keyframes fly-1 {
    0% {
      transform: translateY(0em);
    }
    50% {
      transform: translateY(-0.4em);
    }
    100% {
      transform: translateY(0em);
    }
  }
`;

