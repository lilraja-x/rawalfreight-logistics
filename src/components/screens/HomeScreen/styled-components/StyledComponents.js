import styled from "styled-components";

export const Container = styled.div`
    height: 95vh;
    display: flex;
    align-items: center;
    flex-direction: row;
    backgroun-color: white !important;
    @media (max-width: 768px) {
      flex-direction: column;
      height: auto;
  }
`;

export const Main = styled.div`
    text-align: center;
    width: 50%;
    @media (max-width: 768px) {
      width: 100%;
    }
`;

export const Title = styled.h1`
    font-size: 3 rem;
    color: #333;
    margin-bottom: 1rem;
`;

export const Text = styled.p`
    font-size: 1.5vw;
    color: #777;
    margin-bottom: 2rem;
    @media (max-width: 768px) {
      font-size 2vw;
  }
`;

export const ButtonWrapper = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.a`
    display: inline-block;
    padding: 0.9rem 1.8rem;
    font-size: 16px;
    font-weight: 700;
    color: black;
    margin: 5px;
    border: 3px solid #062e61;
    cursor: pointer;
    position: relative;
    background-color: transparent;
    mix-blend-mode: screen;
    text-decoration: none;
    overflow: hidden;
    z-index: 1;
    font-family: inherit;
    }

    .btn::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #062e61;
    transform: translateX(-100%);
    transition: all .3s;
    z-index: -1;
    }

    .btn:hover::before {
    transform: translateX(0);
    }
`;

export const FadeIn = styled.div`
@keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .fade-in {
    animation: fadeIn 1s ease-in-out;
  }
  
`;

export const RigthSide = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items:cneter
  div {
    width: 100%;
    height: 50%;
  }
`;