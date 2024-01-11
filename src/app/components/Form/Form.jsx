'use client'

import styles from './styles.module.css'
import Input from "@/app/components/Input";
import {useRef, useState} from "react";
import * as emailjs from "@emailjs/browser";


const Form = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [buttonText, setButtonText] = useState("Enviar");
  const form = useRef();
  const sendEmail = (e) => {
    setIsLoading(true)
    setButtonText("Enviando...");
    e.preventDefault();

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        setButtonText("Enviado");
        setTimeout(() => {
          setButtonText("Enviar");
          setIsLoading(false);
          form.current.reset()
        }, 1000);
      }, (error) => {
        console.log(error.text);
        setIsLoading(false);
        setButtonText("Enviar");
      });
  };


  return (
    <form className={styles.form} onSubmit={sendEmail} ref={form}>
      <Input type="text" name="fullname" placeholder="Nombre completo"/>
      <Input type="email" name="email" placeholder="Correo"/>
      <textarea rows={8} name="message" placeholder="Descripción" required/>
      <button type="submit" title="Enviar" disabled={isLoading}>{buttonText}</button>
    </form>
  )
}

export default Form