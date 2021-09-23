import React from "react";
import { Card,Row,Col } from 'antd';
import 'antd/dist/antd.css';
const { Meta } = Card;


export const IndividualProduct = ({individualProduct}) =>{
    //console.log(individualProduct);

    return(
        <div>
            <Row gutter={[32,32]}>
                <Col xs={24} sm={12} md={8} lg={4}> 
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img src={individualProduct.url}/>}
            >
            <Meta title={individualProduct.title} description={individualProduct.description} 
            />
            <Meta title={individualProduct.price} description={individualProduct.tipo}
            />
                </Card>
                </Col>
           </Row>
        </div>
    )
}