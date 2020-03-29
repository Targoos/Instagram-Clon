import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.div`
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  margin: 0 auto;
`;
const NavFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const FooterLinks = styled.div`
  text-transform: uppercase;
  margin: 10px;

  a {
    text-decoration: none;
    margin-right: 15px;
  }
`;

const ParagraphText = styled.p`
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <NavFooter>
        <FooterLinks>
          <Link to={"#!"}>information</Link>
        </FooterLinks>
        <FooterLinks>
          <Link to={"#!"}>help</Link>
        </FooterLinks>
        <FooterLinks>
          <Link to={"#!"}>press</Link>
        </FooterLinks>
        <FooterLinks>
          <Link to={"#!"}>api</Link>
        </FooterLinks>
        <FooterLinks>
          <Link to={"#!"}>job</Link>
        </FooterLinks>
        <FooterLinks>
          <Link to={"#!"}>privacy</Link>
        </FooterLinks>
        <FooterLinks>
          <Link to={"#!"}>conditions</Link>
        </FooterLinks>
        <FooterLinks>
          <Link to={"#!"}>directory</Link>
        </FooterLinks>
        <FooterLinks>
          <Link to={"#!"}>profiles</Link>
        </FooterLinks>
        <FooterLinks>
          <Link to={"#!"}>hastags</Link>
        </FooterLinks>
        <FooterLinks>
          <Link to={"#!"}>language</Link>
        </FooterLinks>
      </NavFooter>
      <ParagraphText>
        &copy; InstagramCLON made by Tulio Ramirez, todos los derechos
        reservados
      </ParagraphText>
    </FooterContainer>
  );
};

export default Footer;
