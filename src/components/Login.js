import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { auth } from '../config/config';
import 'antd/dist/antd.css';
import { useHistory } from 'react-router';

export const Login = () => {
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');

    //uso de history para regresar a la pagina
    const history = useHistory();

    const handleLogIn = (e)=>{
        e.preventDefault();
        //console.log(name,email,password)
        auth.signInWithEmailAndPassword(email,password)
        .then(()=>{
                setEmail('');
                setPassword('');
                history.push('/home');
            
        }).catch(()=>{})

    }



    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    }

    return(
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Form.Item
                name="email"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Correo electrónico" onChange={(e)=>setEmail(e.target.value)} value={email} />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Contraseña"
                    onChange={(e)=>setPassword(e.target.value)} value={password}
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                    Forgot password
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" onClick={handleLogIn} >
                    Iniciar sesión
                </Button>
                Or <Link to ="/signup"> Registrate ahora</Link>
            </Form.Item>
        </Form>
    );
};