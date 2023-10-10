import styled from "styled-components";

export const Container = styled.div`
  background-image: url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80);
  background-size: cover;
  background-position: center;
  height: 100vh;
  margin-bottom: 0px;

  @media (max-width: 768px) {
    height: auto;
  }
  
`;

export const Section1 = styled.div`
    display: flex;
    justify-content: center;
    height: 7%;
    padding: 2rem;
    width:100%;
    @media (max-width: 768px) {
        height: auto;
      }
`;



export const Section2 = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  height: 34%;
  width: 40%;
  margin-left: 15%;
  @media (max-width: 768px) {
    height: auto;
    margin-top: 25%;
    width: auto;
  }
`;


export const Images = styled.div`
  display: flex;
  margin-top: 10%;
`;

export const IconImage = styled.img`
  width: 45px;
  height: 45px;
  margin: 0 2px;
`;

export const Title = styled.div`
  color: white;
  font-size: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2px; 

  p{
    font-size: 14px;
    color: white;
  }
  @media (max-width: 768px) {
    width: auto;
    p{
        font-size: 13px;
        margin-right: 1%;
    }
  }

`;

export const LowerSection = styled.div`
  display: flex;
  height: 54.3%;
  overflow: hidden;
  @media (max-width: 768px) {
    height: auto;
    flex-direction:column;
  }
`;

export const Main = styled.div`
  height: 100%;
  margin-left: 13.5%;
  width: 27%;
  overflow: hidden;
  @media (max-width: 768px) {
    margin-left: 11%;
    height: auto;
    width: auto;
    margin-right: 2%;
  }
`;

export const Section3 = styled.div`
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 80%;
  padding: 0rem;
  @media (max-width: 768px) {
    height: auto;
    width: auto;
    flex-wrap: wrap;
  }
`;

export const Section4 = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  height: 81%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 80vh;
  object-fit: fill;
`;