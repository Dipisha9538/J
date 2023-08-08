import React from 'react'
import "./style.css";
import styled from "styled-components";
// import { mobile } from "../responsive";
import {
  Facebook,
  Instagram,
  // MailOutline,
  // Phone,
  Pinterest,
  // Room,
  Twitter,
} from "@material-ui/icons";
const Payment = styled.img`
    width: 50%;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding:1 px;
`;

// const Logo = styled.h1``;

const SocialContainer = styled.div`
  display: flex;
`;


// import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
          <h4>Coffee Shop</h4>
          <ui className="list-unstyled">
        <li>let's take a coffee break</li>

       
    <Left>
    <SocialContainer>
    <SocialIcon color="3B5999">
    <Facebook />
    </SocialIcon>
    <SocialIcon color="E4405F"> 
    <Instagram />
    </SocialIcon>
    <SocialIcon color="55ACEE">
    <Twitter />
    </SocialIcon>
    <SocialIcon color="E60023">
    <Pinterest />
    </SocialIcon>
    </SocialContainer>
    </Left>
    </ui>
           
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Useful Links</h4>
            <ui className="list-unstyled">
              <li>Home</li>
              <li>Cart</li>
              <li>Coffee items</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>We Are Located On</h4>
            <ui className="list-unstyled">
              <li>Biratnagar</li>
              <li>Kathmandu</li>
              <li>Damak</li>
              <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Coffee Shop | All rights reserved |
            Terms Of Service | Privacy
          </p>
         
        </div>
      </div>
    </div>
  
  );
}

export default Footer;
