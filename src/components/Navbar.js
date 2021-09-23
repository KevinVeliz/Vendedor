import React from 'react';
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router';
import { auth } from '../config/config';
import { Button } from 'antd';
import { vendedor } from './vendedor';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

export const Navbar = ({user}) => {


    const history=useHistory();

    const handleLogout=()=>{
        auth.signOut().then(()=>{
            history.push('/login');
        })
    }

    return(
        <div>
            <Row>
                <Col>
                {user && <>
                <Link to="/vendedor"> {user} </Link> 
                <Button onClick={handleLogout}> LOGOUT </Button>
                <Button><Link to="/add-products"> AGREGAR PRODUCTOS  </Link> </Button>
                
            </>}
            </Col>
            </Row>
            
        </div>
    )
}