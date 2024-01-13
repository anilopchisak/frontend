import React from 'react';
import {Button, Card, Col, Image} from "react-bootstrap";

const ProductItem = ({product}) => {

    return (
        <Col md={4} style={{margin: '0 0 25px 0'}}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={product.img}/>
                <div style={{fontWeight: 'bold'}}>{product.name}</div>
                <div className={"text-black-50"}>{product.descr}</div>
                <div style={{margin: '0 0 0 auto'}}>{product.cost} $</div>
            </Card>
            <Button variant="outline-primary" size={"sm"}>Add to cart</Button>
        </Col>
    );
};

export default ProductItem;