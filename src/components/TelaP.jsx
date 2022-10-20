import React, { useState,  useEffect } from 'react';
import logo from '../logo.svg';
import './TelaP.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {redirect, useNavigate} from 'react-router-dom';

export default function TelaLogin(props) {
    const [name, setName] = useState(undefined);
    const [display, setDisplay]= useState ('none');
    const [user, setUser]=useState(null);
    
    
    const navigate = useNavigate();

    const [date, setData]=useState(undefined);
    const [dateC, setDataC]=useState(undefined);
    const [password, setPassword]=useState(null);
    const [login, setLogin]=useState(null);

    async function submit(){
        if('2021-02-27'=== date){
            navigate("/audio");

        }else{

        }
    }

    //Verifica se o usuário já possui algum login
    

    //Envio do formulário de login
    async function sendForm()
    {
        let response=await fetch('us-cdbr-east-04.cleardb.com:3006/login',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: user,
                password: password
            })
        });
        let json=await response.json();
        if(json === 'error'){
            setDisplay('flex');
            setTimeout(()=>{
                setDisplay('none');
            },2000);
        }else{
            
            props.navigation.navigate('AreaRestrita');
        }
    }

    return (
        <section className='loginArea'>
            <div id='boxLogin'>
            <img src="../logo192.png" className="App-logo" alt="logo" />
                <input id='userInput' type="date" placeholder="Usuário" value={name} onChange={(e)=> setData(e.target.value)}/>
                <button id='buttonLogin' onClick={() => submit()}>
                    Enviar
                </button>
                
            </div>
        </section>
    )
}