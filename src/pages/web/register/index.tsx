import Head from 'next/head'
import styles from './register.module.scss'

export default function Register () {
    return (
        <>
        <Head>
            <title>Register</title>
        </Head>
        <div className={styles.body__register}>
            <form className={styles.form__register}>
                <div className={styles.box__names}>
                    <div className={styles.box_input}>
                        <label>First name</label>
                        <br />
                        <br />
                        <input type='text' placeholder='Name'></input>
                    </div>
                    <div className={styles.box_input}>
                        <label>Last name</label>
                        <br />
                        <br />
                        <input type='text' placeholder='Last name'></input>
                    </div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.box__login}>
                    <div className={styles.box_input}>
                        <label>Email</label>
                        <br />
                        <br />
                        <input type='email' placeholder='user@gmail.com'></input>
                    </div>
                    <div className={styles.box_input}>
                        <label>Password</label>
                        <br />
                        <br />
                        <input type='password' placeholder='********'></input>
                    </div>
                    <p className={styles.text__checklist}>Seus conhecimentos</p>
                    <div className={styles.checklist}>
                        <div className={styles.checkbox}>
                            <input type = "checkbox" id = "html" name = "experiencia" value = "html"></input>
                            <label> Html </ label>
                        </div>
                        <div className={styles.checkbox}>
                            <input type = "checkbox" id = "css" name = "experiencia" value = "css"></input>
                            <label> CSS </ label>
                        </div>
                        <div className={styles.checkbox}>
                            <input type = "checkbox" id = "javaScript" name = "experiencia" value = "javaScript"></input>
                            <label> JavaScript </ label>
                        </div>
                    </div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.box__confirm}>
                    <button className={styles.confirm}>Confirmar</button>
                </div>
            </form>
        </div>
        </>
    )
}