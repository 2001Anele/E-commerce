import React, {useState, useEffect} from 'react';
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/pictures/hero-imgs.png'
import "../styles/home.css";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import Services from '../Services/Services';
import ProductList from '../components/UI/ProductList';
import products from '../assets/data/products';
import counterImg from "../assets/pictures/counter.jpg";
import Clock from "../components/UI/Clock";

const Home = () => {

    const [trendingProducts, setTrendingProducts] = useState([]);
    const [bestSellingProducts, setBestSellingProducts] = useState([]);
    const [toiletBlockProducts, setToiletBlockProducts] = useState([]);
    const [broomsProducts, setBroomsProducts] = useState([]);
    const year = new Date().getFullYear();

    useEffect(()=>{
        const filterdTrendingProducts = products.filter(
            (item) => item.category ==='bleach');

        const filterdBestSellingProducts = products.filter(
            (item) => item.category ==='bathroom');

        const filterdToiletBlockProducts = products.filter(
                (item) => item.category ==='toilet');
        
        const filterdBroomsProducts = products.filter(
                (item) => item.category ==='brooms');

        setTrendingProducts(filterdTrendingProducts);
        setBestSellingProducts(filterdBestSellingProducts);
        setToiletBlockProducts(filterdToiletBlockProducts);
        setBroomsProducts(filterdBroomsProducts);
    }, []);
    return (
    <Helmet title={"Home"}>
        <section className="hero__section">
        <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className="hero__content">
                            <p className="hero__subtitle">Trending product in {year}</p>
                            <h2>Make Your Home Spotless </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                tempor incididunt ut labore et dolore magna aliqua. </p>
                            <motion.button whileTap={{scale: 1.2}} className="buy__btn"><Link to='/shop'>SHOP NOW</Link></motion.button>
                        </div>
                    </Col>
                    <Col lg ="6" md ="6">
                    <div className="hero__img">
                        <img src={heroImg} alt="" />
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <Services/>
        <section className="trending__products">
            <Container>
                <Row>
                    <Col lg="12" className="text-center">
                        <h2 className="section__title">Trending Products</h2>

                    </Col>
                    <ProductList data={trendingProducts} />
                </Row>
            </Container>
        </section>

        <section className="best__sales">
            <Container>
            <Row>
                    <Col lg="12" className="text-center">
                        <h2 className="section__title">Best Selling</h2>
                    </Col>
                    <ProductList data={bestSellingProducts}/>
                </Row>
            </Container>
        </section>
        <section className="timer__count">
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className="clock__top-content">
                            <h4 className="text-white fs-6 mb=2">Limited Offers</h4>
                            <h3 className="text-white fs-5 mb=3">Quality Bleach</h3>
                        </div>
                        <Clock/>
                        <motion.button whileTap={{scale:1.2}} className="buy__btn store__btn">
                            <Link to="/shop">Visit Store</Link>
                        </motion.button>
                    </Col>

                    <Col lg='5' md='5' className='text-end'>
                        <img src={counterImg} alt=""/>
                    </Col>

                </Row>
            </Container>
        </section>
        <section className="new__arrivals">
            <Container>
                <Row>
                <Col lg="12" className="text-center">
                        <h2 className="section__title">New Arrivals</h2>
                    </Col>
                    <ProductList data={toiletBlockProducts} />
                    <ProductList data={broomsProducts} />
                </Row>
            </Container>
        </section>
    </Helmet>
    );
};
export default Home;