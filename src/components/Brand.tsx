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
    "public/img/molteni-logo.svg",
    "public/img/molteniData-logo.png",
    "public/img/nolte-logo.svg",
  ];
  return (
    <Container>
      <Inner>
        <h3>Nexus Brands</h3>
        <ul>
          <li>
            <img src="/img/molteni-logo.svg" alt="" />
          </li>
        </ul>
      </Inner>
    </Container>
  );
};

export default Brand;
