import React,{useState} from 'react';
import { Container,Row,Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/product-details.css";
import { motion } from 'framer-motion';

const ProductDetails = () => {

    const [tab,setTab] = useState('decs');
    const {id} = useParams();
    const product = products.find((item)=> item.id ===id);

    const {imgUrl, productName, price, avgRating, reviews, description, shortDesc } =
    product;
    return ( 
    <Helmet title={productName}>
        <CommonSection title={productName} />

        <section className='pt-0'>
            <Container>
                <Row>
                    <Col lg="6">
                        <img src = {imgUrl} alt=""/>
                    </Col>

                    <Col lg="6">
                        <div className="product__details">
                            <h2>{productName}</h2>
                            <div className="product__rating d-flex 
                            align-items-center gap-5 mb-3">
                            <div>
                                <span>
                                    <i class="ri-star-s-fill"></i>
                                    </span>
                                <span>
                                    <i class="ri-star-s-fill"></i>
                                    </span>
                                <span>
                                    <i class="ri-star-s-fill"></i>
                                    </span>
                                <span>
                                    <i class="ri-star-s-fill"></i>
                                    </span>
                                <span>
                                    <i class="ri-star-half-s-fill"></i>
                                    </span>
                                </div>

                                <p>(<span>{avgRating}</span>ratings)</p>
                            </div>

                            <span className='product__price'>R {price}</span>
                            <p className="mt-3">{shortDesc}</p>

                            <motion.button whileTap={{ scale:1.2 }} className="buy__btn">Add To Cart</motion.button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <div className="tab__wrapper d-flex align-items-center gap-5">
                            <h6 className={`${tab === "desc" ? "active__tab" : ""}`}
                            onClick={()=> setTab("desc")}>
                                Description</h6>
                            <h6 className={`${tab === "rev" ? "active__tab" : ""}`}
                             onClick={()=> setTab("rev")}>
                                Reviews ({reviews.length})</h6>
                        </div>
                            {
                                tab==="desc" ?  <div className="tab__content mt-5">
                                <p>{description}</p>
                            </div> :(
                            <div>Reviews</div>
                            )}
                       
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>
    );
};
export default ProductDetails;