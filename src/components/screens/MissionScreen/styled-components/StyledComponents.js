import styled from "styled-components";


export const Container = styled.div`
  background-image: url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80);
  background-size: cover;
  background-position: center;
  height: 100vh;
  margin-bottom: 0px;
  display: flex;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    overflow: hidden;
  }
`;

export const MainSection = styled.div`
    margin-top: 0%;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 50%;

    @media (max-width: 768px) {
        width: 100%;
      }
`;

export const Section1 = styled.div`
    backdrop-filter: blur(0px) saturate(58%);
    -webkit-backdrop-filter: blur(0px) saturate(58%);
    background-color: rgba(255, 255, 255, 0.71);
    border: 1px solid rgba(209, 213, 219, 0.3);
    margin-top: 0%;
    margin-right: auto;
    display: block;
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    flex-direction: column;

    @media (max-width: 768px) {
        margin-left: 0;
        margin-right: auto;
        width: 100%;
        height: auto;
        justify-content: center;
        overflow: hidden;
      }
`;

export const Item = styled.div`
    padding: 8rem;
    @media (max-width: 768px) {
        padding: 3rem;
        width: auto;
        overflow: hidden;
      }
`;

export const Title = styled.div`
    color: #062e61;
    font-size: 34px;
    margin-bottom: 0px;
`;

export const Content = styled.div`
    margin-top: 0px;
    color: black;
    font-size: 15px;
`;

export const Section2 = styled.div`
  height: 50%;
  margin-left: 0%;
  overflow: hidden;

  @media (max-width: 768px) {
    display: none;
  }

`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;


export const Section3 = styled.div`
    backdrop-filter: blur(0px) saturate(159%);
    -webkit-backdrop-filter: blur(0px) saturate(159%);
    background-color: rgba(255, 255, 255, 0.39);
    border: 1px solid rgba(209, 213, 219, 0.3);
    margin-top: 5%;
    margin-right: 5%;
    height: 65%;
    width: 35%;
    display: grid;
    overflow: hidden;
    place-items: center;

    @media (max-width: 768px) {
        height: auto;
        width: auto;
        overflow: hidden;
        padding: 3rem;
      }
`;
