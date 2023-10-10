import styled from "styled-components";


export const Container = styled.div`
  background-image: url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80);
  background-size: cover;
  background-position: center;
  height: 100vh;
  margin-bottom: 0px;
  display: flex;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
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
      height: auto;
      flex-direction: row;
      width: 100%
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
    flex-direction: column;
`;


export const Images = styled.div`
  display: flex;
`;

export const IconImage = styled.img`
  width: 45px;
  height: 45px;
  margin: 0 2px;
`;

export const Title = styled.div`
  color: black;
  font-size: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2px; 
  width: 60%;

  p{
    font-size: 14px;
    color: black;
  }
`;



export const Section2 = styled.div`
  height: 50%;
  margin-left: 0%;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;


export const Section3 = styled.div`
    backdrop-filter: blur(0px) saturate(159%);
    -webkit-backdrop-filter: blur(0px) saturate(159%);
    background-color: rgba(255, 255, 255, 0.75);
    border: 1px solid rgba(209, 213, 219, 0.3);
    margin-top: 10%;
    margin-right: 15%;
    margin-left: 1%;
    height: 65%;
    width: 30%;
    display: flex;
    flex-direction: column;

    div{
        margin-left: 20px;
        margin-top: 10px;
    }
    @media (max-width: 768px) {
      height: auto;
      width: auto;
      margin-right: auto;
      margin-left: 0%;
    }
`;