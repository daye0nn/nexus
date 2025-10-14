import styled from "styled-components";
import Banner from "../components/Banner";
import Content from "../components/Content";

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Home = () => {
  return (
    <Container>
      <Banner />
      <Content />
    </Container>
  );
};

export default Home;
