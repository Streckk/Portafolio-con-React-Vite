import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contactame = () => {
    const form = useRef();
    const inputRef = useRef(null);
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_1jeujys', 'template_6u8j3se', form.current, {
                publicKey: 'xTc79nCrsLme4wXt5',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );

    };
    return (

        <footer className='footer'>
            <h4>Contactame</h4>
            <form ref={form} onSubmit={sendEmail} className='formulario'>
                <input type="text" name="user_name" placeholder='Nombre' required/>
                <input type="email" name="user_email" placeholder='Correo' required/>
                <textarea name="message" placeholder='Mensaje' className='Message'required/>
                <input type="submit" value="Enviar" className='BtnEnviar'required/>
            </form>

        </footer>
    )
}

export default Contactame
