import { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Content2 from "./Content2";

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
`;

const LeftItem = styled.div`
  flex: 1;
  position: relative;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  p {
    text-transform: uppercase;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
  }
  span {
    width: 100%;
    position: absolute;
    bottom: 40px;
    left: 0;
    text-align: center;
    img {
      width: 180px;
      object-fit: cover;
      filter: invert(0.5);
    }
  }
`;

const RightItem = styled.div`
  flex: 1;
`;

const Wrapper = styled.div`
  padding: 120px;
  h3 {
    font-size: 3rem;
    font-weight: 300;
    line-height: 1.2;
    margin-bottom: 100px;
  }
`;

const Button = styled.div`
  display: inline-block;
  min-width: 260px;
  height: 45px;
  border: 1px solid var(--dark);
  border-radius: 50px;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    width: 100%;
    height: 100%;
  }
`;

const Content = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Container>
      <ContentWrapper>
        <LeftItem data-aos="slide-right" data-aos-duration="1500">
          <p>l i v i n g & b e d r o o m</p>
          <img
            src="https://nexus-official.com/wp-content/uploads/2019/12/img_livingroom-1.jpg"
            alt="livingroom"
          />
          <span>
            <img src="/img/molteni-logo.svg" alt="logo" />
          </span>
        </LeftItem>
        <RightItem data-aos="slide-left" data-aos-duration="1500">
          <Wrapper>
            <h3>
              인테리어에 대한 새로운 가치를
              <br />
              제안하는 문화공간,
              <br />
              넥서스 플래그십스토어 입니다.
            </h3>
            <Button>
              <a href="#">
                VIEW MORE STORY <FontAwesomeIcon icon={faPlus} />
              </a>
            </Button>
          </Wrapper>
        </RightItem>
      </ContentWrapper>
      <Content2 />
    </Container>
  );
};

export default Content;
