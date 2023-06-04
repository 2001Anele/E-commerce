import React,{useState} from 'react';
import CommonSection from '../components/UI/CommonSection';
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from 'reactstrap';
import "../styles/shop.css";
import products from "../assets/data/products";
import ProductLists from "../components/UI/ProductList";

const Shop = () => {

    const [productsData, setProductsData] = useState(products)

    const handleFilter = e=>{
        const filterValue = e.target.value
        if(filterValue==="bleach") {
            const filteredProducts = products.filter(
                (item) => item.category === "bleach"
            );

            setProductsData(filteredProducts);
        }

        if(filterValue==="bathroom") {
            const filteredProducts = products.filter(
                (item) => item.category === "bathroom"
            );

            setProductsData(filteredProducts);
        }

        if(filterValue==="toilet") {
            const filteredProducts = products.filter(
                (item) => item.category === "toilet"
            );

            setProductsData(filteredProducts);
        }

        if(filterValue==="dishwashing") {
            const filteredProducts = products.filter(
                (item) => item.category === "dishwashing"
            );

            setProductsData(filteredProducts);
        }

        if(filterValue==="brooms") {
            const filteredProducts = products.filter(
                (item) => item.category === "brooms"
            );

            setProductsData(filteredProducts);
        }
    };

    const handleSearch = e=>{
        const searchTerm = e.target.value

        const searchedProducts = products.filter(item=> item.productName.
            toLowerCase().includes(searchTerm.toLowerCase()))

            setProductsData(searchedProducts)
    }
    return (
    <Helmet title='Shop'>
        <CommonSection title='Products'/>

        <section>
            <Container>
                <Row>
                    <Col lg='3' md='3'>
                        <div className="filter__widget">
                            <select onChange={handleFilter}>
                                <option>Filter By Category</option>
                                <option value="bleach">Bleach</option>
                                <option value="bathroom">Toilet Cleaners</option>
                                <option value="toilet">Toilet Block</option>
                                <option value="dishwashing">Dishwashing Liquid</option>
                                <option value="brooms">Brooms & Dustpans</option>
                            </select>
                        </div>
                    </Col>
                    <Col lg='3' md='3'>
                    <div className="filter__widget">
                            <select>
                                <option>Sort By</option>
                                <option value="ascending">Ascending</option>
                                <option value="descending">Descending</option>
                            </select>
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className="search__box">
                            <input type="text"  placeholder="Search....." onChange={handleSearch}/>
                            <span>
                                <i class="ri-search-line"></i>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className='pt-0'>
            <Container>
                <Row>
                    {
                        productsData.length === 0? (
                        <h1 className='text-center fs-4'>No products are found!</h1>
                        )
                        :
                        (
                            <ProductLists data={productsData}/>
                        )
                    }
                </Row>
            </Container>
        </section>
    </Helmet>
    );
};
export default Shop;