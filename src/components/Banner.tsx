import styled from "styled-components";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const ImgWrap = styled.div`
  position: relative;
  height: 100vh;
  img.bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .logo {
    position: absolute;
    top: 50%;
    left: 150px;
    width: 500px;
    height: auto;
    object-fit: cover;
  }
`;

const DotsWrapper = styled.ul`
  position: absolute;
  top: 50%;
  right: 240px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 9999;

  li {
    position: relative;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 1px solid var(--light);
    background: transparent;
    cursor: pointer;
    transition: all 0.3s;
    &.active {
      background-color: var(--light);
    }
    button {
      all: unset;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      cursor: pointer;
    }
  }
`;

const Title = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: var(--light);
  padding: 60px 100px;
  width: 50%;
  h2 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #222;
  }
`;

const Banner = () => {
  const sliderRef = useRef<Slider>(null);
  const [current, setCurrent] = useState(0);

  const settings = {
    arrows: false,
    pauseOnHover: false,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (_: number, newIndex: number) => setCurrent(newIndex),
  };
  useEffect(() => {
    Aos.init();
  }, []);

  const slides = [
    { logo: "/img/nexus-logo.png", bg: "/img/banner1.jpg" },
    {
      logo: "https://nexus-official.com/data/file/_admin_banner_//%EB%A9%94%EC%9D%B8%EB%B0%B0%EB%84%883/%EB%A9%94%EC%9D%B8%EB%B0%B0%EB%84%883-img-molteni-logo-2.svg",
      bg: "/img/banner2.jpg",
    },
    {
      logo: "https://nexus-official.com/data/file/_admin_banner_//%EB%A9%94%EC%9D%B8%EB%B0%B0%EB%84%885/%EB%A9%94%EC%9D%B8%EB%B0%B0%EB%84%885-logo_dada%201.png",
      bg: "/img/banner3.jpg",
    },
    {
      logo: "https://nexus-official.com/data/file/_admin_banner_//%EB%A9%94%EC%9D%B8%EB%B0%B0%EB%84%886/%EB%A9%94%EC%9D%B8%EB%B0%B0%EB%84%886-img-gessi-logo-2.svg",
      bg: "/img/banner4.jpg",
    },
    {
      logo: "https://nexus-official.com/data/file/_admin_banner_//%EB%A9%94%EC%9D%B8%EB%B0%B0%EB%84%881/%EB%A9%94%EC%9D%B8%EB%B0%B0%EB%84%881-img-kettal-logo-2.svg",
      bg: "/img/banner5.jpg",
    },
    {
      logo: "https://nexus-official.com/data/file/_admin_banner_//%EB%A9%94%EC%9D%B8%EB%B0%B0%EB%84%882/%EB%A9%94%EC%9D%B8%EB%B0%B0%EB%84%882-img-fontana-logo-2.svg",
      bg: "/img/banner6.jpg",
    },
  ];

  return (
    <Container>
      <Slider ref={sliderRef} {...settings}>
        {slides.map((s, i) => (
          <ImgWrap key={i}>
            {current === i && (
              <motion.img
                className="logo"
                src={s.logo}
                alt="logo"
                key={i}
                initial={{ opacity: 0, x: -70, y: "-50%" }}
                animate={{ opacity: 1, x: 0, y: "-50%" }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            )}
            <img className="bg" src={s.bg} alt={`banner-${i}`} />
          </ImgWrap>
        ))}
      </Slider>
      <DotsWrapper>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <li
            key={i}
            className={current === i ? "active" : ""}
            onClick={() => sliderRef.current?.slickGoTo(i)}
          >
            <button />
          </li>
        ))}
      </DotsWrapper>
      <Title data-aos="slide-left" data-aos-duration="1500">
        <h2>OUR STORY</h2>
      </Title>
    </Container>
  );
};

export default Banner;
