import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee, faBook } from '@fortawesome/free-solid-svg-icons';


const Footer = (props) => {
  return (
    <div>
      <Row className="footer">
          <Col className="footer-col" md="4" sm="12">
            <ul>
              <li>
                <a href="http://www.nhl.com">
                  <FontAwesomeIcon
                    icon={['fab', 'linkedin']}
                    size="2x"
                    color="#61707a"
                  />
                </a>
              </li>
              <li>
                <a href="http://www.github.com">
                  <FontAwesomeIcon
                    icon={['fab', 'github-square']}
                    size="2x"
                    color="#61707a"
                  />
                </a>
              </li>
              <li>
                <a href="http://www.duckduckgo.com">
                  <FontAwesomeIcon
                    icon={['fab', 'galactic-republic']}
                    size="2x"
                    color="#61707a"
                  />
                </a>
              </li>
              <li>
                <a href="http://www.duckduckgo.com">
                  <FontAwesomeIcon
                    icon={['fab', 'galactic-senate']}
                    size="2x"
                    color="#61707a"
                  />
                </a>
              </li>
            </ul>
          </Col>
           <Col className="footer-col" md="4" sm="12">
             <ul>
               <li>Trademark Policy</li>
               <li>Privacy Policy</li>
               <li>Terms and Conditions</li>
             </ul>
           </Col>
           <Col className="footer-col" md="4" sm="12">
             <ul>
               <li>&#169; Copyright 2019 Book Trading Club</li>
             </ul>
           </Col>
      </Row>
      <Row className="footer-logo">
        <Col md="12">
          <FontAwesomeIcon
            className="book"
            icon={faBook}
            size="3x"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
