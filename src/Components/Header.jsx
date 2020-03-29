import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;

const NavHeader = styled.div`
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const NavLeft = styled.div`
  width: 33.333%;
  text-align: left;
  font-family: "Cookie", cursive;
  font-size: 30px;

  a {
    text-decoration: none;
    color: black;
  }
`;

const Span = styled.div`
  font-weight: 900;
  display: inline-block;
`;

const Barra = styled.div`
  border: 1px solid;
  height: 20px;
  display: inline-block;
  margin: 0px 15px 0px 15px;
`;

const NavCenter = styled.div`
  width: 33.333%;
  text-align: center;
`;

const Input = styled.input`
  border: solid 1px #dbdbdb;
  padding: 7px 33px;
  border-radius: 3px;
  color: #dbdbdb;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: #fafafa;
  &:active,
  &:focus {
    text-align: left;
  }
`;

const NavRight = styled.div`
  width: 33.333%;
  text-align: right;

  a {
    padding: 13px;
    color: black;
    font-size: 25px;
  }
`;

const Header = () => {
  return (
    <Nav>
      <NavHeader>
        <NavLeft>
          <Link to={"#!"}>
            <i className="fab fa-instagram">
              <Barra />
            </i>
            Instagram<Span>Clon</Span>
          </Link>
        </NavLeft>
        <NavCenter>
          <Input placeholder="Buscar" />
        </NavCenter>
        <NavRight>
          <Link to={"#!"}>
            <i className="far fa-compass"></i>
          </Link>
          <Link to={"#!"}>
            <i className="far fa-heart"></i>
          </Link>
          <Link to={"#!"}>
            <i className="far fa-user"></i>
          </Link>
        </NavRight>
      </NavHeader>
    </Nav>
  );
};

export default Header;
