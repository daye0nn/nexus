import { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

const Wrapper = styled.div`
  display: flex;
  .right-item {
    margin-top: -140px;
  }
`;

const Item = styled.div`
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
    color: var(--light);
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
    }
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
          <p>b a t h r o o m</p>
          <img
            src="https://nexus-official.com/wp-content/uploads/2019/10/img-bathroom-2-x%402x.jpg"
            alt="bathroom"
          />
          <span>
            <img src="/img/gessi-logo.svg" alt="logo" />
          </span>
        </Item>
        <Item
          className="right-item"
          data-aos="slide-left"
          data-aos-duration="1500"
        >
          <p>k i t c h e n & d i n i n g r o o m</p>
          <img
            src="https://nexus-official.com/wp-content/uploads/2019/12/img_kitchen.jpg"
            alt="kitchen"
          />
          <span>
            <img src="/img/molteniData-logo.png" alt="logo" />
          </span>
        </Item>
      </Wrapper>
      <Wrapper>
        <Item data-aos="slide-right" data-aos-duration="1500">
          <p>o u t d o o r</p>
          <img
            src="https://nexus-official.com/wp-content/uploads/2019/12/img_outdoor.jpg"
            alt="outdoor"
          />
          <span>
            <img src="/img/kettal-logo.svg" alt="logo" />
          </span>
        </Item>
        <Item
          className="right-item"
          data-aos="slide-left"
          data-aos-duration="1500"
        >
          <p>l i g h t i n g & f a b r i c</p>
          <img
            src="https://nexus-official.com/wp-content/uploads/2019/12/img_lighting.jpg"
            alt="lighting"
          />
          <span>
            <img src="/img/fontana-logo.svg" alt="logo" />
          </span>
        </Item>
      </Wrapper>
    </>
  );
};

export default Content2;
