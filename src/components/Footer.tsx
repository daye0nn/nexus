import styled from "styled-components";

const Container = styled.div`
  background: var(--ft-bg);
  color: var(--light);
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.6;
`;

const Top = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 80px 0 40px;
`;

const Inner = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  .logo {
    width: 100px;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  color: rgba(255, 255, 255, 0.7);
`;

const Contact = styled.div`
  color: rgba(255, 255, 255, 0.7);
`;

const Bottom = styled.div``;

const Footer = () => {
  return (
    <Container>
      <Top>
        <Inner>
          <div className="logo">
            <img src="/img/nexus-logo.png" alt="logo" />
          </div>
          <Info>
            <p>
              (주)한샘넥서스 본사
              <br />
              서울시 서초구 방배로 285
              <br />
              대표이사 손영동
              <br />
              사업자 등록번호 : 114-81-68690
            </p>
            <p>
              넥서스 플래그십스토어
              <br />
              서울시 강남구 학동로 201 (학동역 8번 출구)
            </p>
          </Info>
          <Contact>
            <p>
              전화문의
              <br />
              SHOWROOM : +82 1670-1950
            </p>
            <p>
              메일문의
              <br />
              nexusgallery@nexus-official.com
            </p>
          </Contact>
        </Inner>
      </Top>
      <Bottom>
        <Inner>
          <p>&copy; HANSSEM NEXUS 2023. All rights reserved</p>
          <div>
            <a href="#">INSTAGRAM (Nexus Flagship Store)</a>
            <a href="#">INSTAGRAM (Nolte)</a>
          </div>
          <p>개인정보처리방침</p>
        </Inner>
      </Bottom>
    </Container>
  );
};

export default Footer;
