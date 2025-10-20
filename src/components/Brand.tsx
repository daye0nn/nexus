import styled from "styled-components";

const Container = styled.div`
  background: #212a3d;
  padding: 200px 0;
`;

const Inner = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 120px;
  color: var(--light);
  h3 {
    font-size: 4.4rem;
    font-weight: 500;
    margin-bottom: 100px;
    text-align: center;
  }
  ul {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 100px;
    justify-content: center;
    align-items: center;
    li {
      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }
`;

const Brand = () => {
  const brandLogos = [
    "/img/logo/molteni-logo.svg",
    "/img/logo/molteniData-logo.png",
    "/img/logo/nolte-logo.svg",
    "/img/logo/gessi-logo.svg",
    "/img/logo/kettal-logo.svg",
    "/img/logo/louispoulsen-logo.svg",
    "/img/logo/fontana-logo.svg",
    "/img/logo/porcelanosa-logo.svg",
    "/img/logo/duravit-logo.svg",
    "/img/logo/laufen-logo.svg",
    "/img/logo/axent-logo.svg",
    "/img/logo/kvadrat-logo.svg",
    "/img/logo/fd-logo.svg",
    "/img/logo/kaldewei-logo.svg",
    "/img/logo/scheucher-logo.png",
  ];

  return (
    <Container>
      <Inner>
        <h3>Nexus Brands</h3>
        <ul>
          {brandLogos.map((logo, index) => (
            <li key={index}>
              <img src={logo} alt={`brand-${index}`} />
            </li>
          ))}
        </ul>
      </Inner>
    </Container>
  );
};

export default Brand;
