import styled from "styled-components";

export const Container = styled.div`
  background-image: url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80);
  background-size: cover;
  background-position: center;
  height: 100vh;
  margin-bottom: 0px;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    overflow: hidden;
    height:auto;
  }
`;

export const Content = styled.div`
color: black;
font-size: 15px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Section1 = styled.div`
  backdrop-filter: blur(0px) saturate(58%);
  -webkit-backdrop-filter: blur(0px) saturate(58%);
  background-color: rgba(255, 255, 255, 0.71);
  border: 1px solid rgba(209, 213, 219, 0.3);
  margin-top: 5%;
  margin-left: 15%;
  display: block;
  height: 74%;
  width: 25%;

  @media (max-width: 768px) {
    margin-left: 2%;
    align-self: center;
    overflow: hidden;
    width: 80%;

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

export const RightSection = styled.div`
margin-top: 0%;
margin-left: auto;
display: flex;
flex-direction: column;
height: 100%;
width: 50%;

@media (max-width: 768px) {
  width: 100%;
}
`;

export const Section2 = styled.div`
backdrop-filter: blur(0px) saturate(159%);
-webkit-backdrop-filter: blur(0px) saturate(159%);
background-color: rgba(192, 192, 192, 0.39);
border: 1px solid rgba(209, 213, 219, 0.3);
margin-top: 0%;
margin-left: auto;
height: 50%;
width: 100%;
display: grid;
place-items: center;

ul {
  list-style-type: none;
  padding-left: 20px;
}

li {
  position: relative;
  padding-left: 10px;
  margin-bottom: 10px;
}

li::before {
  content: "";
  position: absolute;
  top: 6px;
  left: -5px;
  width: 5px;
  height: 5px;
  transform: rotate(45deg);
  background-color: #062e61;
}

@media (max-width: 768px) {
  height: auto;
  padding: 20px;
}
`;

export const Section3 = styled.div`
height: 50%;
margin-right: 0%;

@media (max-width: 768px) {
  display: none;
}
`;

export const Title = styled.div`
  color: #062e61;
  font-size: 34px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;