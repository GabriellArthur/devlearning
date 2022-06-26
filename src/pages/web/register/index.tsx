import Head from 'next/head'
import styles from './register.module.scss'
import React from 'react';
import api from '../../../services/api'

export default function Register () {
    const [formValue, setformValue] = React.useState({
        name: '',
        email: '',
        password: '',
        phoneNumber: '',
      });

    const handleChange = (event) => {
        setformValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    }

    const  handleSubmit = async () => {
        if (formValue.name && formValue.email && formValue.password) {
            await api({
                method: 'post',
                url: '/users/signup',
                data: formValue
            });
        }
    }

    return (
        <>
        <Head>
            <title>Register</title>
        </Head>
        <div className={styles.body__register}>
            <form className={styles.form__register} onSubmit={handleSubmit}>
                <div className={styles.box__names}>
                    <div className={styles.box_input}>
                        <label>Name</label>
                        <input
                            type='text'
                            placeholder='Name'
                            name='name'
                            id="name"
                            value={formValue.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.box__login}>
                    <div className={styles.box_input}>
                        <label>Email</label>
                        <input
                            type='email'
                            placeholder='user@gmail.com'
                            name='email'
                            id="email"
                            value={formValue.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.box_input}>
                        <label>Password</label>
                        <input
                            type='password'
                            placeholder='********'
                            name='password'
                            id='password'
                            value={formValue.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.box_input}>
                        <label>Phone number</label>
                        <input
                            type='tel'
                            placeholder='(00) 0000-0000'
                            name='phoneNumber'
                            id='phoneNumber'
                            value={formValue.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.box__confirm}>
                    <button className={styles.confirm} type="submit">Confirmar</button>
                </div>
            </form>
        </div>
        </>
    )
}