import React from "react";
import {
  Container,
  ContentContainer,
  Desc,
  FirstImg,
  ImgContainer,
  InnerContainer,
  ReadBtn,
  SecondImg,
  Span,
  SubTitle,
  Title,
} from "./styles";
import Interior from "../../assets/interior.jpg";
import Interior1 from "../../assets/interior1.jpg";
import Interior2 from "../../assets/interior2.jpg";
import Interior3 from "../../assets/interior3.jpg";

const Project = () => {
  return (
    <Container>
      <ContentContainer>
        <Title>Our Last Project</Title>
        <SubTitle>
          Minimalist Style <Span></Span>
        </SubTitle>
        <Desc>
          This is our latest project, which is a residence with a minimalist and
          modern interior design style, we use gray to give the impression of a
          minimalist home.
        </Desc>
        <ReadBtn>Read More</ReadBtn>
      </ContentContainer>
      <ImgContainer>
        <InnerContainer>
          <FirstImg src={Interior} />
        </InnerContainer>
        <InnerContainer>
          <SecondImg src={Interior1} />
        </InnerContainer>
        <InnerContainer>
          <SecondImg src={Interior2} />
        </InnerContainer>
        <InnerContainer>
          <SecondImg src={Interior3} />
        </InnerContainer>
      </ImgContainer>
    </Container>
  );
};

export default Project;
