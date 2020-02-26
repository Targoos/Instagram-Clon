import React from 'react'
import styled from 'styled-components';

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
        margin-right: 15px
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
                    <a href="#!">information</a>
                </FooterLinks>
                <FooterLinks>
                    <a href="#!">help</a>
                </FooterLinks>
                <FooterLinks>
                    <a href="#!">press</a>
                </FooterLinks>
                <FooterLinks>
                    <a href="#!">api</a>
                </FooterLinks>
                <FooterLinks>
                    <a href="#!">job</a>
                </FooterLinks>
                <FooterLinks>
                    <a href="#!">privacy</a>
                </FooterLinks>
                <FooterLinks>
                    <a href="#!">conditions</a>
                </FooterLinks>
                <FooterLinks>
                    <a href="#!">directory</a>
                </FooterLinks>
                <FooterLinks>
                    <a href="#!">profiles</a>
                </FooterLinks>
                <FooterLinks>
                    <a href="#!">hastags</a>
                </FooterLinks>
                <FooterLinks>
                    <a href="#!">language</a>
                </FooterLinks>
            </NavFooter>
            <ParagraphText>
                &copy;	InstagramCLON made by Tulio Ramirez, todos los derechos reservados
            </ParagraphText>
        </FooterContainer>
    );
}
 
export default Footer;