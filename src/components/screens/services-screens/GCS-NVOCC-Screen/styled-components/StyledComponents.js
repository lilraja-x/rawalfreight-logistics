import styled from "styled-components";

export const Container = styled.div`
  background-image: url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80);
  background-size: cover;
  background-position: center;
  height: 100vh;
  overflow: hidden;
  margin-bottom: 0px;

  @media (max-width: 768px) {
        height: auto;
        align-items: center;
    }
`;

export const Section1 = styled.div`
    display: flex;
    justify-content: center;
    height: 7%;
    width:100%;
    padding:2rem;
    overflow: hidden;

    @media (max-width: 768px) {
        align-self: center;
        margin-bottom: 30%;
    }
`;


export const Section2 = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  height: 35%;
  width: 40%;
  padding: 0rem;
  margin-top: 0px;
  margin-top: 5%;
  margin-left: 20%;
  overflow: hidden;

  @media (max-width: 768px) {
    width: auto;
    backdrop-filter: blur(2px) saturate(64%);
    -webkit-backdrop-filter: blur(2px) saturate(64%);
    background-color: rgba(90,84,79, 0.53);
    margin-left: 15%;
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
    animation: fadeIn 1s ease-in-out;
}
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
`;

export const LowerSection = styled.div`
  display: flex;
  height: 53%;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction:column;
}
`;

export const Main = styled.div`
  margin-left: 15%;
  margin-top: 5%;
  height: 100%;

  
`;

export const Section3 = styled.div`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(2px) saturate(64%);
  -webkit-backdrop-filter: blur(2px) saturate(64%);
  background-color: rgba(90,84,79, 0.53);
  height: 100%;
  padding: 1rem;
  @media (max-width: 768px) {
    padding: 0rem;
    height: auto;
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
    animation: fadeIn 1s ease-in-out;
}
`;

export const Section4 = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 80vh;
  object-fit: fill;
`;