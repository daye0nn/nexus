import styled from "styled-components";
import Banner from "../components/Banner";
import Content from "../components/Content";
import Store from "../components/Store";
import Brand from "../components/Brand";

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
      <Store />
      <Brand />
    </Container>
  );
};

export default Home;
