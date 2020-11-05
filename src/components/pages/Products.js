import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import '../Cards.css';
import Footer from '../Footer';
import '../Footer.css';

export default function Product() {
    return (
        <>
        <h1 className="products">Products</h1>
        <Cards />
        <Footer />
        </>
    ); 
};