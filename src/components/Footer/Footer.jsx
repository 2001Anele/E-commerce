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
                        <ListGroup className="mb-3">
                            <ListGroupItem className="ps-0 border-0">
                                <Link to='#'>Dishwashing Liquids</Link>
                            </ListGroupItem>

                            <ListGroupItem className="ps-0 border-0">
                                <Link to='#'>Bleach Cleaners</Link>
                            </ListGroupItem>
                            <ListGroupItem className="ps-0 border-0">
                                <Link to='#'>Bathroom Cleaners</Link>
                            </ListGroupItem>
                            <ListGroupItem className="ps-0 border-0">
                                <Link to='#'>Brooms, Dustpans & Brushes</Link>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                </Col>
                <Col lg="2">
                <div className="quick__links">
                        <h4 className="quick__links-title">
                            Useful Links
                        </h4>
                <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                                <Link to="/shop">Shop</Link>
                            </ListGroupItem>
                            <ListGroupItem className="ps-0 border-0">
                                <Link to="/cart">Cart</Link>
                            </ListGroupItem>
                            <ListGroupItem className="ps-0 border-0">
                                <Link to="/login">Login</Link>
                            </ListGroupItem>
                            <ListGroupItem className="ps-0 border-0">
                                <Link to='#'>Privacy Policy</Link>
                            </ListGroupItem>
                        </ListGroup>
                        </div>

                </Col>
                <Col lg="3">
                <div className="quick__links">
                        <h4 className="quick__links-title">
                            Useful Links
                        </h4>
                <ListGroup className="mb-3">
                            <ListGroupItem className="ps-0 border-0">
                                <span><i class="ri-map-pin-line"></i></span>
                                <p>259 Umdlebe Rd, Umlazi, Durban</p>
                            </ListGroupItem>

                            <ListGroupItem className="ps-0 border-0">
                            <span><i class="ri-phone-line"></i></span>
                                <p>+27 833 444 275</p>
                            </ListGroupItem>
                            <ListGroupItem className="ps-0 border-0">
                            <span><i class="ri-map-pin-line"></i></span>
                                <p>259 Umdlebe Rd, Umlazi, Durban</p>
                            </ListGroupItem>
                            <ListGroupItem className="ps-0 border-0">
                            <span><i class="ri-mail-line"></i></span>
                                <p>pongolasupplies@gmail.com</p>
                            </ListGroupItem>
                        </ListGroup>
                        </div>
                </Col>
            </Row>
        </Container>
    </footer>
};

export default Footer;