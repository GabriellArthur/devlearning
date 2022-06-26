import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import styles from './styles.module.scss';

const initialState = {
  email: "",
  password: "",
}

const Login = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { email, password } = formValue;

  const { signIn } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
        signIn(formValue);
    } else {
      console.log('Login invalido!')
    }
  };

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className={styles.body}>
        <div className={styles.card__login}>
          <main className={styles.contentContainer}>
            <section className={styles.box__text}>
              <span>Hi, Welcome</span>
              <h1>Make login to use this Web Site</h1>
              <h2>From student to student</h2>
              <p>This site was built to help other students in their careers.</p>
            </section>
            <div>
              <div className={styles.box__form} onSubmit={handleSubmit}>
                <p className={styles.title}>Login</p>
                <input
                  className={styles.input__values}
                  id="EmailValidate"
                  type="email"
                  placeholder="Your Email address"
                  value={email}
                  name="email"
                  onChange={onInputChange}
                  required
                />

                <br></br>
                <input
                  className={styles.input__values}
                  id="EmailValidate"
                  placeholder="Your Password"
                  type="password"
                  value={password}
                  name="password"
                  onChange={onInputChange}
                  required
                />
                <br></br>
                <button className={styles.btn__login} onClick={handleSubmit} >LOGIN</button>
                <br></br>
                <div className={styles.box_register}>
                  <div className={styles.text__register}>Not registered yet?<Link href='/web/register'><a className={styles.link__register}> Create a Account</a></Link></div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div className={styles.linha}>
        </div>
      </div>
      <footer className={styles.footer}>
        <h2>Desenvolvido por Luiz Claudio, Yaman Augusto, Gabriel Arthur, Douglas Figueroa</h2>
      </footer>
    </>
  )
}

export default Login