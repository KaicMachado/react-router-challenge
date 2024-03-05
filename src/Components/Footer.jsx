import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
 color: #b6b6b6;
 padding: 2rem;
 text-align: center;
 font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
 font-weight: 600;
`;

const Footer = () => {
 return (
  <FooterDiv>
   <p>Alguns Direitos Reservados.</p>
  </FooterDiv>
 );
};

export default Footer;
