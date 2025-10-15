import { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  display: flex;
`;

const Item = styled.div<{ lift?: boolean }>`
  flex: 1;
  .img-wrapper {
    position: relative;
    ${({ lift }) => lift && `margin-top: -140px;`}
    .main-img {
      width: 100%;
      height: auto;
      display: block;
      object-fit: cover;
    }
    p {
      text-transform: uppercase;
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translateX(-50%);
      color: var(--light);
      z-index: 2;
    }
  }
  .button-wrap {
    background: var(--gray);
    padding: 48px 0;
    height: auto;
    min-height: 140px;
    text-align: center;
  }
`;

const TextWrap = styled.div`
  padding: 120px;
  text-align: center;
  h3 {
    font-size: 3rem;
    font-weight: 300;
    line-height: 1.5;
    margin-bottom: 100px;
  }
`;

const Logo = styled.span`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  img {
    width: 180px;
    object-fit: cover;
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
    gap: 10px;
  }
  &:hover {
    border: none;
    text-decoration: underline;
  }
`;

const Content2 = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Wrapper>
        <Item data-aos="slide-right" data-aos-duration="1500">
          <div className="img-wrapper">
            <p>b a t h r o o m</p>
            <img
              className="main-img"
              src="https://nexus-official.com/wp-content/uploads/2019/10/img-bathroom-2-x%402x.jpg"
              alt="bathroom"
            />
            <Logo>
              <img src="/img/logo/gessi-logo.svg" alt="logo" />
            </Logo>
          </div>
        </Item>
        <Item lift data-aos="slide-left" data-aos-duration="1500">
          <div className="img-wrapper">
            <p>k i t c h e n & d i n i n g r o o m</p>
            <img
              className="main-img"
              src="https://nexus-official.com/wp-content/uploads/2019/12/img_kitchen.jpg"
              alt="kitchen"
            />
            <Logo>
              <img src="/img/logo/molteniData-logo.png" alt="logo" />
            </Logo>
          </div>
        </Item>
      </Wrapper>
      <Wrapper>
        <Item data-aos="slide-right" data-aos-duration="1500">
          <div className="img-wrapper">
            <p>o u t d o o r</p>
            <img
              className="main-img"
              src="https://nexus-official.com/wp-content/uploads/2019/12/img_outdoor.jpg"
              alt="outdoor"
            />
            <Logo>
              <img src="/img/logo/kettal-logo.svg" alt="logo" />
            </Logo>
          </div>
        </Item>
        <Item lift data-aos="slide-left" data-aos-duration="1500">
          <div className="img-wrapper">
            <p>l i g h t i n g & f a b r i c</p>
            <img
              className="main-img"
              src="https://nexus-official.com/wp-content/uploads/2019/12/img_lighting.jpg"
              alt="lighting"
            />
            <Logo>
              <img src="/img/logo/fontana-logo.svg" alt="logo" />
            </Logo>
          </div>
        </Item>
      </Wrapper>
      <Wrapper>
        <Item data-aos="slide-right" data-aos-duration="1500">
          <TextWrap>
            <h3>
              넥서스의 다양한 문화 클래스와
              <br />
              이벤트를 소개 합니다.
            </h3>
            <Button>
              <a href="#">
                VIEW MORE EVENT <FontAwesomeIcon icon={faPlus} />
              </a>
            </Button>
          </TextWrap>
        </Item>
        <Item lift data-aos="slide-left" data-aos-duration="1500">
          <div className="img-wrapper">
            <p>t i l e & f l o o r</p>
            <img
              className="main-img"
              src="https://nexus-official.com/wp-content/uploads/2019/12/img_tile.jpg"
              alt="tile"
            />
            <Logo>
              <img src="/img/logo/porcelanosa-logo.svg" alt="logo" />
            </Logo>
          </div>
          <div className="button-wrap">
            <Button>
              <a href="#">
                VIEW MORE BRANDS <FontAwesomeIcon icon={faPlus} />
              </a>
            </Button>
          </div>
        </Item>
      </Wrapper>
    </>
  );
};

export default Content2;
