import { ConsoleSqlOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { auth,fs } from '../config/config';
import { Navbar } from './Navbar';
import { Products } from './Products';


export const Home = () => {

    function GetCurrentUser(){
        const[user,setUser]=useState('');
        useEffect(()=>{
            auth.onAuthStateChanged(user=>{
                if(user){
                    fs.collection('users').doc(user.uid).get().then(snapshot=>{
                        setUser(snapshot.data().Name);
                    })
                }
                else{
                    setUser(null);
                }
            })
        },[])
        return user;
    }

    const user = GetCurrentUser();
    //console.log(user);

    const [products, setProducts]=useState([]);

    const getProducts = async ()=>{
        const products = await fs.collection('Products').get();
        const productsArray = [];
        for(var snap of products.docs){
            var data = snap.data();
            data.ID = snap.id;
            productsArray.push({
                ...data
            })
            if(productsArray.length === products.docs.length){
                setProducts(productsArray)
            }
        }
    }


    useEffect(()=>{
        getProducts();
    })

    return(
        <div>
            
            <Navbar user={user}/>
            
            {products.length > 0 &&(
                <div>
                    <h1>Products</h1>
                    <Products products={products}/>
                </div>
            )}

        </div>
    )
}