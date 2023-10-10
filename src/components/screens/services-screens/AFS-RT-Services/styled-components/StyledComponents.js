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
    /* Adjust the styles for the Container element on mobile screens */
    flex-direction: column;
    height: auto;
}
  
`;

export const MainSection = styled.div`
    margin-top: 0%;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    width: 50%;

    @media (max-width: 768px) {
        /* Adjust the styles for the Container element on mobile screens */
        width: 100%;
        flex-direction: row;
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
    overflow: hidden;
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

  p{
    font-size: 14px;
    color: black;
  }
`;



export const Section2 = styled.div`
  height: 50%;
  overflow: hidden;
  margin-left: 0%;
  @media (max-width: 768px) {
    /* Adjust the styles for the Container element on mobile screens */
    width: 100%;
}
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
    overflow: hidden;
    flex-direction: column;

    div{
        margin-left: 20px;
        margin-top: 10px;
    }

    @media (max-width: 768px) {
        /* Adjust the styles for the Container element on mobile screens */
        width: auto;
        margin-top: 0%;
        margin-left: 0%;
        backdrop-filter: blur(2px) saturate(64%);
        -webkit-backdrop-filter: blur(2px) saturate(64%);
        background-color: rgba(90,84,79, 0.53);
        flex-direction: column;
        align-items: flex-start;
        div{
            margin: 0%;
        }
        margin-right:auto;
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
