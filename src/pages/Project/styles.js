import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 50px 10%;
`;

export const ContentContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 50px;
  color: #414141;
  font-family: sans-serif;
  text-transform: uppercase;
`;

export const SubTitle = styled.h1`
  font-size: 26px;
  color: #414141;
  font-weight: 300;
  text-transform: uppercase;
  padding-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48%;
`;

export const Span = styled.span`
  flex: 1;
  height: 1px;
  background-color: #000;
  margin-left: 10px;
  @media (max-width: 980px) {
    font-size: 40px;
  }
  @media (max-width: 500px) {
    font-size: 30px;
  }
`;

export const Desc = styled.h1`
  font-size: 25px;
  color: #b8b8b8;
  width: 80%;
  font-weight: 300;
  margin-bottom: 20px;
  @media (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 980px) {
    font-size: 20px;
  }
  @media (max-width: 500px) {
    font-size: 17px;
  }
`;

export const ReadBtn = styled.button`
  background: black;
  border: none;
  color: white;
  padding: 10px 30px;
  margin-top: 20px;
  font-weight: 600;
  width: max-content;
  @media (max-width: 1080px) {
    padding: 5px 20px;
  }
  @media (max-width: 888px) {
    padding: 5px 20px;
  }
`;

export const ImgContainer = styled.div`
  width: 60%;
  display: flex;
  gap: 30px;
`;

export const InnerContainer = styled.div`
  width: 50%;
`;

export const FirstImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const SecondImg = styled.img`
  width: 100%;
  height: 100%;
`;
