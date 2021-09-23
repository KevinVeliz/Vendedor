import React, { useState } from "react";
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Form, Input, InputNumber } from 'antd';
import { types } from "@babel/core";
import { fs, storage } from "../config/config";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };



export const AddProducts = () =>{


    const[title,setTitle]=useState();
    const[description,setDescription]=useState();
    const[price,setPrice]=useState();
    const[tipo,setTipo]=useState();
    const[image,setImage]=useState();
    const[uploadErrorProduct, setUploadErrorProduct]=useState();

    const handleAddProduct=(e)=>{
        e.preventDefault();
        //console.log(title,description,price);
        console.log(image);
        const uploadTask = storage.ref(`product-images/${image.name}`).put(image);
        uploadTask.on('state_changed', snapshot=>{
            const progreso = (snapshot.bytesTransferred/snapshot.totalBytes)*100
        },error=>setUploadErrorProduct(error.message),()=>{
            storage.ref('product-images').child(image.name).getDownloadURL().then(url=>{
                fs.collection('Products').add({
                    title,
                    tipo,
                    price: Number(price),
                    url,
                    description
                }).then(()=>{
                    setTitle('');
                    setDescription('');
                    setPrice('');
                    //document.getElementById('file').value='';
                    setUploadErrorProduct('');
                })
            })
        }

        )
    }
    
    

    const handleChange =(e)=>{
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    };

    console.log(image)

    const onFinish = (values) => {
        console.log(values);
      };
      
    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };

    return(
        <div>
            
            <h1 style={{textAlign:"center"}}>AÑADIR PRODUCTOS</h1>
            <div className="container">
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item name={['user', 'name']} label="Nombre" >
                    <Input onChange={(e)=>setTitle(e.target.value)} value={title}/>
                </Form.Item>
                <Form.Item name={['user', 'type']} label="Tipo" >
                    <Input onChange={(e)=>setTipo(e.target.value)} value={tipo }/>
                </Form.Item>
                <Form.Item name={['user', 'precio']} label="Precio">
                    <Input onChange={(e)=>setPrice(e.target.value)} value={price }/>
                </Form.Item>
                <Form.Item name={['user', 'description']} label="Descripcion" >
                    <Input.TextArea onChange={(e)=>setDescription(e.target.value)} value={description}/>
                </Form.Item>
                
                
                <Upload {...props} >
                
                </Upload>
                <label/>

                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <input type="file" onChange={handleChange}/>
                    <Button type="primary" htmlType="submit" onClick={handleAddProduct}>
                    Añadir
                    </Button>
                </Form.Item>
                </Form>
                

                
            </div>
            
            
        </div>
    );
}