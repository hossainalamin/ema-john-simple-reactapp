import React from 'react';
import logo from '../../images/giphy.gif'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './product.css';

const Product = (probs) => {
    const style = {
        'width':'100px',
        'height':'100px',
    }
    return (
        <div className='div-container'>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={logo} style={style} />
            <Card.Body>
                <Card.Title>{probs.name}</Card.Title>
                <Card.Text>
                {probs.specification}.
                </Card.Text>
                <Button variant="primary" className='cart-button' 
                onClick={ () => probs.addEventHander(probs)}>Add to cart</Button>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Product;