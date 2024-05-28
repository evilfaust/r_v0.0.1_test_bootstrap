'use client';

import { useForm } from 'react-hook-form';
import axios from 'axios';
import Alert from '@/app/components/alert';
import { useState } from 'react';
// import {GridLoader, PulseLoader} from 'react-spinners';
import {GridLoader} from 'react-spinners';

import styles from "@/app/blog/page.module.css";


import {Form} from "react-bootstrap";

interface FormInput {
  fullname: string;
  email: string;
  phone: string;
}

const Contactsform = () => {
const [success, setSuccess] = useState(false);
const [error, setError] = useState(false);
const [loading, setLoading] = useState(false);
const [showButton, setShowButton] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInput>();

  // const botToken = process.env.TELEGRAM_BOT_TOKEN;
  // const chatId = process.env.TELEGRAM_CHAT_ID;

  const botToken = '6835479669:AAGslFIK0rz-d6gvFkpF-cbwtpNSOlYJYqo';
  // const chatId = '328497552';
  const chatId = '289631419';


  const removeAlert = () => {
    setSuccess(false);
    setError(false);
  };

  const onSubmit = async (data: FormInput) => {
    try {
      setLoading(true);
      setShowButton(false);
      const response = await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: `Name: ${data.fullname}\nEmail: ${data.email}\nMessage: ${data.phone}`,
      });
      console.log('Message sent successfully:', response.data);
      setSuccess(true);
      reset();
    } catch (error) {
      setError(true);
      console.error('Failed to send message:', error);
    } finally {
      setLoading(false);
      setShowButton(true);
    }
  };

  return (
    <Form className="p-4 rounded" style={{ backgroundColor: "#444863" }} onSubmit={handleSubmit(onSubmit)} noValidate>
      {success && <Alert bgColor={'success'} icon={'✅ '} status="Отправлено!" message="Ваше сообщение отправлено 😊" onClick={removeAlert} />}
      {error && <Alert bgColor={'danger'} icon={'❌ '} status="Ошибка!" message="Что-то пошло не так. Пожалуйста попробуйте позже 😢" onClick={removeAlert} />}
      <Form.Group className="mb-3">
        <Form.Label className="text-light">Фамилия Имя</Form.Label>
        <Form.Control
         type="text"
        id="fullname"
        {...register('fullname',
            { required: 'Пожалуйста введите Ваше имя' })}
        name="fullname"
        placeholder="Фамилия Имя"
        />
        {errors.fullname && <span className="text-light text-center">{errors.fullname.message}</span>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className="text-light">Номер телефона</Form.Label>
        <Form.Control
          id="phone"
              {...register('phone',
              { required: 'Пожалуйста введите номер телефона для связи' })}
              placeholder="+7 (900) 123 45 67"
        />
        {errors.phone && <span className="text-light text-center">{errors.phone.message}</span>}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="text-light">E-mail</Form.Label>
        <Form.Control
          type="email"
            id="email"
            {...register('email', {
              required: 'Пожалуйста введите e-mail',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Не правильный email адрес. Пример: example@example.com',
              },
            })}
            aria-invalid={errors.email ? 'true' : 'false'}
            name="email"
            placeholder="email@example.com"
        />
        {errors.email && <span className="text-center text-light">{errors.email.message}</span>}
      </Form.Group>

      {showButton && (
          <button className={`${styles.hoverBG} btn px-4 w-100`} type="submit">
            Отправить
          </button>
      )}
      {loading && (
          <div className="d-flex justify-content-center">
            {/*<PulseLoader size={15} color={`#FFC803`} speedMultiplier={0.5} />*/}
            <GridLoader size={15} color={`#FFC803`} speedMultiplier={0.5} />

            </div>
          )}
    </Form>
  );
}

export default Contactsform;