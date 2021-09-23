import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth,fs } from '../config/config';


export const vendedor =() =>{

    function GetCurrentUser(){
        const[user,setUser]=useState([]);
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
    console.log(user.Email)
    return(
        <div>
            hola
            {user}
            
            <h1>
                Esta página se encuentra en mantenimiento, gracias por la comprensión 
                y esperemos que pronto volvamos a tener la página funcional
                ten un buen día :)
            </h1>
            <Button> <Link to="/home"> REGRESAR </Link> </Button>
        </div>
        
    );
}

