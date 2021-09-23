import React from 'react';
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router';
import { auth } from '../config/config';
import { Button, Menu } from 'antd';
import { vendedor } from './vendedor';
import 'antd/dist/antd.css';
import '../App.css';

export const Navbar = ({user}) => {


    const history=useHistory();

    const handleLogout=()=>{
        auth.signOut().then(()=>{
            history.push('/login');
        })
    }

    return(

        <Menu  style={{ background: "rgb(255,174,134)"}} mode="horizontal" className="menudesing">
            <Menu.Item unselectable >
            <Link to="/vendedor"> {user} </Link> 
            </Menu.Item>

            <Menu.Item >   
                <Link to="/Selector">
                <Button  style={{backgroundColor:"#bbffbb"}}  ><Link to="/add-products"> AGREGAR PRODUCTOS  </Link> </Button>
                </Link>
            </Menu.Item>

            <Menu.Item >   
                <Button  style={{backgroundColor:"#bbffbb"}} onClick={handleLogout} > LOGOUT </Button>
            </Menu.Item> 
        </Menu>
        
        
    )
}