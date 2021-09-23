import React from "react";
import { Card } from 'antd';
import 'antd/dist/antd.css';
const { Meta } = Card;

export const IndividualProduct = ({individualProduct}) =>{
    //console.log(individualProduct);

    return(
        <div>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img src={individualProduct.url}/>}
            >
            <Meta title={individualProduct.title} description={individualProduct.description} 
            />
            <Meta title={individualProduct.price} description={individualProduct.tipo}
            />
                </Card>,
           
        </div>
    )
}