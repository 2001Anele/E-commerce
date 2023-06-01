import React from 'react'
import { Container } from 'reactstrap';
import "../../styles/common-section.css";

const CommonSection = ({ title }) => {
    return (
       <section className="common__section">
            <container className="text-center">
                <h1>{title}</h1>
            </container>
       </section>
    );
};

export default CommonSection;