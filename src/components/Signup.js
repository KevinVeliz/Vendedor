import React from 'react';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { auth, fs } from '../config/config';
import { useHistory } from 'react-router';

import {
    Button,
    Form,
    Input,
    Select,
} from 'antd';
import 'antd/dist/antd.css';
import Checkbox from "antd/es/checkbox/Checkbox";



export const Signup = () => {

    //uso de history para regresar a la pagina
    const history = useHistory();

    //guardar los datos del formulario
    const [name,setName]= useState('');
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [phone,setPhone] = useState('');

    //evento para verifiacar el almacenamiento de datos
    //createUser es una tarea asincronica
    const handleSignUp = (e)=>{
        e.preventDefault();
        //console.log(name,email,password)
        auth.createUserWithEmailAndPassword(email,password)
        .then((credentials)=>{
            console.log(credentials);
            fs.collection('users').doc(credentials.user.uid).set({
                Name: name,
                Email: email,
                Password: password,
                Phone: phone
            }).then(()=>{
                setName('');
                setEmail('');
                setPassword('');
                history.push('/login');
            }).catch();
        })
        .catch(()=>{

        })

    }

    const { Option } = Select;

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };
    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 8,
            },
        },
    };


        const [form] = Form.useForm();

        const onFinish = (values) => {
            console.log('Received values of form: ', values);
        };

        const prefixSelector = (
            <Form.Item name="prefix" noStyle>
                <Select style={{ width: 70 }}>
                    <Option value="593">+593</Option>
                </Select>
            </Form.Item>
        );



        return(
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
                residence: ['zhejiang', 'hangzhou', 'xihu'],
                prefix: '593',
            }}
            scrollToFirstError
        >
            <Form.Item
                name="email"
                label="E-mail"
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
                <Input onChange={(e)=>setEmail(e.target.value)} value={email} />
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password  onChange={(e)=>setPassword(e.target.value)} value={password} />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="nickname"
                label="Nickname"
                tooltip="What do you want others to call you?"
                rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
            >
                <Input onChange={(e)=>setName(e.target.value)} value={name} />
            </Form.Item>

            <Form.Item
                name="phone"
                label="Phone Number"
                rules={[{ required: true, message: 'Por favor ingrese su n??mero de tel??fono' }]}
            >
                <Input addonBefore={prefixSelector} style={{ width: '100%' }} 
                onChange={(e)=>setPhone(e.target.value)} value={phone}/>
            </Form.Item>

            <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                    {
                        validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject(new Error('Usted debe aceptar los t??rminos y condiciones')),
                    },
                ]}
                {...tailFormItemLayout}
            >
                <Checkbox>
                    He le??do y acepto los t??rminos y condiciones
                </Checkbox>
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit" onClick={handleSignUp} >
                    Registrarse
                </Button> 
                o Si ya tienes cuenta, ingresa <Link to ="/login"> Aqu??</Link>

            </Form.Item>

        </Form>
    );
}