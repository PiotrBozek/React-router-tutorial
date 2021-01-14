import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';

const ProductsPage = ({match}) => {
    return ( 
        <>
            <div>Strona produktu</div>
            <Product id= {match.params.id}/>
            <Link to='/products'>Powrót do list produktów</Link>
        </>
     );
}
 
export default ProductsPage;