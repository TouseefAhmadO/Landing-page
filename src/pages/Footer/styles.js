import styled, { keyframes } from "styled-components";
import { FOOTER_BG, PRIMARY_TEXT, SECONDARY_TEXT } from "../../utils/colors";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px); /* Optional for subtle motion */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  padding: 50px 10% 50px 10%;
  background: ${FOOTER_BG};
  animation: ${fadeIn} 1.2s ease-in-out;
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  width: 40%;
  margin-bottom: 30px;
  @media (max-width: 1316px) {
    width: 50%;
  }
  @media (max-width: 650px) {
    width: 100%;
  }
`;
export const TitleContainer = styled.div`
  width: 20%;
  margin-bottom: 30px;
  @media (max-width: 1316px) {
    width: 50%;
  }
  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  color: ${SECONDARY_TEXT};
  display: flex;
  align-items: center;
  gap: 15px;
  @media (max-width: 1316px) {
    justify-content: center;
    white-space: nowrap;
  }
`;
export const Desc = styled.h1`
  font-size: 20px;
  color: ${PRIMARY_TEXT};
  margin-top: 20px;
  width: 80%;
  @media (max-width: 1316px) {
    text-align: center;
    width: 100%;
  }
`;

export const CopyRight = styled.h1`
  text-align: center;
  color: ${PRIMARY_TEXT};
  font-size: 17px;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;
export const IconStyle = styled.i`
  color: #d1d1d1;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 20px;
  cursor: pointer;
`;
