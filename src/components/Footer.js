// Filename - components/Footer.js

import React from "react";
import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <h1
        style={{
          color: "green",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
       Little Lemon
      </h1>
      <FooterContainer>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">
              Aim
            </FooterLink>
            <FooterLink href="#">
              Vision
            </FooterLink>
            <FooterLink href="#">
              Testimonials
            </FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">
              Writing
            </FooterLink>
            <FooterLink href="#">
              Food
            </FooterLink>
            <FooterLink href="#">
              Coding
            </FooterLink>
            <FooterLink href="#">
              Drinks
            </FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">
            
            </FooterLink>
            <FooterLink href="#">
              customer sevice
            </FooterLink>
            <FooterLink href="#">
          
            </FooterLink>
            <FooterLink href="#">
              Enjoyment
            </FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </FooterContainer>
    </Box>
  );
};
export default Footer;
