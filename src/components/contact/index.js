import React from "react";
import { Container, ContentContainer, Desc, MapImg, Title } from "./styles";
import Map from "../../assets/map.png";

const Contact = () => {
  return (
    <Container>
      <MapImg src={Map} />
      <ContentContainer>
        <Title>Contact Us</Title>
        <Desc>
          Our Office is located in 4517 Washington Ave. Manchester, Kentucky
          39495
        </Desc>
      </ContentContainer>
    </Container>
  );
};

export default Contact;
