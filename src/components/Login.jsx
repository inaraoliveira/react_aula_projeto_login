import React from "react";
import Image from './image/image-login.png'
import './Login.css'

export default function Login(){
    const alerta = () => {
        alert('Ocorreu um erro, tente novamente mais tarde.');
    }

    return(
        <div className='container'>
            <div>
                <img src={Image} alt="imagem-usuario" className='imagem' />
            </div>
            <div>
                <h1>Member Login</h1>
                <form>
                    <div className='usuario'>
                        <input type="text" name='usuario' id='usuario' placeholder='✉ Email'/>
                    </div>

                    <div className='senha'>
                        <input type="password" name='senha' id='senha' placeholder='🔒 Senha'/>
                    </div>

                    <button id='botao' onClick={() => alerta()}>LOGIN</button>
                    <p>Esqueceu sua senha? <a href="">Clique aqui.</a></p>
                </form>
            </div>
        </div>
    )
}