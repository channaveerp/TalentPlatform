import React from 'react';
import style from './Login.module.css';
import mail from '../../assets/mail.svg';
const Login = () => {
  return (
    <div className={style.container}>
      <div className={style.namaskaram}>Namaskaram 🙏</div>
      <div className={style.welcome}>Welcome Back</div>
      <form className={style.formContainer}>
        <div className={style.iconInput}>
          <img src={mail} alt='' />
          <input type='text' placeholder='email Address' />
        </div>
        <div className={style.iconInput}>
          <img src={mail} alt='' />
          <input type='text' placeholder='email Address' />
        </div>
      </form>
    </div>
  );
};

export default Login;
