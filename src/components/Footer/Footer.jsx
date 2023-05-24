import React from 'react';
import './Footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/eco-logo.png';
const Footer = () => {
    return <footer className="footer">
        <Container>
            <Row>
                <Col lg="4">
                <div className="logo">
                        <img src={logo} alt="logo" />
                        <div>
                            <h1>Pongola Cleaning Supplies</h1>
                        </div>
                    </div>
                    <p className="footer__text mt=4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Sunt, accusamus. Vitae quod atque officia veniam repudiandae 
                            voluptas cumque magnam doloremque!
                        </p>
                </Col>
                <Col lg="3">
                    <div className="quick__links">
                        <h4 className="quick__links-title">
                            Top Categories
                        </h4>
                        <ListGroup>
                            <ListGroupItem>
                                <Link to='#'>Dishwashing Liquids</Link>
                            </ListGroupItem>

                            <ListGroupItem>
                                <Link to='#'>Bleach Cleaners</Link>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Link to='#'>Bathroom Cleaners</Link>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Link to='#'>Brooms, Dustpans & Brushes</Link>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                </Col>
                <Col lg="2"></Col>
                <Col lg="3"></Col>
            </Row>
        </Container>
    </footer>
};

export default Footer;