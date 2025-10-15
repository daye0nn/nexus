import { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

const Container = styled.div`
  background-image: url("/img/background.jpg");
  height: 1440px;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`;

const Inner = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
`;

const Text = styled.div`
  position: absolute;
  top: 30vh;
  left: 6vw;
  color: var(--light);
  display: flex;
  flex-direction: column;
  gap: 50px;
  p {
    font-size: 1.8rem;
    text-transform: uppercase;
  }
  h3 {
    font-size: 4.4rem;
  }
`;

const Info = styled.div`
  background: #232c41;
  color: var(--light);
  padding: 120px 0;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 200;
    line-height: 1.5;
    text-align: center;
  }
`;

const Store = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Container>
        <Inner>
          <Text data-aos="slide-up" data-aos-duration="1000">
            <p>where are we</p>
            <h3>Nexus flagship store</h3>
          </Text>
        </Inner>
      </Container>
      <Info>
        <Inner>
          <p>Mon - Sat 10:00 - 19:00</p>
          <p>
            서울특별시 강남구 학동로 201
            <br />
            201, Hakdong-ro, Gangnam-gu, Seoul,
            <br />
            Republic of Korea
          </p>
          <p>
            SHOWROOM
            <br />
            +82 2-1670-1950
          </p>
        </Inner>
      </Info>
    </>
  );
};

export default Store;
