import styles from './register.module.scss'

export default function Register () {
    return (
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
                        <input type='email' placeholder='usuario@gmail.com'></input>
                    </div>
                    <div className={styles.box_input}>
                        <label>Password</label>
                        <br />
                        <br />
                        <input type='password' placeholder='********'></input>
                    </div>
                </div>
                <div className={styles.line}></div>
                <button className={styles.confirm}>Confirmar</button>
            </form>
        </div>
    )
}