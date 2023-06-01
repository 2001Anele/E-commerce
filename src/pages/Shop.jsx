import React from 'react';
import CommonSection from '../components/UI/CommonSection';
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from 'reactstrap';

const Shop = () => {
    return (
    <Helmet title='Shop'>
        <CommonSection title='Products'/>

        <section>
            <Container>
                <Row>
                    <Col lg='3' md='3'>
                        <div className="filter__widget">
                            <select>
                                <option value="bleach">Bleach</option>
                                <option value="bathroom">Toilet Cleaners</option>
                                <option value="toilet">Toilet Block</option>
                                <option value="dishwashing">Dishwashing Liquid</option>
                                <option value="brooms">Brooms & Dustmane.
                                </option>
                            </select>
                        </div>
                    </Col>
                    <Col lg='3' md='3'></Col>
                    <Col lg='6' md='6'></Col>
                </Row>
            </Container>
        </section>
    </Helmet>
    );
};
export default Shop;