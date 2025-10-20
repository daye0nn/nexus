import { useState, useEffect } from "react";
import styled from "styled-components";

const Nav = styled.div<{ $isScrolled: boolean }>`
  width: 100%;
  border-bottom: 0.5px solid var(--light);
  display: flex;
  position: fixed;
  top: 0;
  justify-content: space-between;
  padding: 24px 50px;
  z-index: 1000;
  background-color: ${({ $isScrolled }) =>
    $isScrolled ? "#fff" : "transparent"};
  img {
    width: 100px;
    object-fit: cover;
    filter: ${({ $isScrolled }) => ($isScrolled ? "invert(1)" : "invert(0)")};
  }
`;

const Item = styled.ul<{ $isScrolled: boolean }>`
  display: flex;
  gap: 50px;
  align-items: center;
  li {
    text-transform: uppercase;
    font-weight: 300;
    cursor: pointer;
    color: ${({ $isScrolled }) => ($isScrolled ? "#000" : "var(--light)")};
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Nav $isScrolled={isScrolled}>
      <img src="/img/nexus-logo.png" alt="logo" />
      <Item $isScrolled={isScrolled}>
        <li>nexus</li>
        <li>brands</li>
        <li>products</li>
        <li>news&event</li>
        <li>contract</li>
      </Item>
    </Nav>
  );
};

export default Header;
