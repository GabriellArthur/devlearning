import Link from 'next/link'
import styles from './styles.module.scss'

export default function Login () {
    return (
        <>
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
                            <div className={styles.box__form}>
                                <p className={styles.title}>Login</p>
                                <input placeholder="Username" type="text"className={styles.input__values}/>
                                <br></br>
                                <input placeholder="Password" type="password" className={styles.input__values}/>
                                <br></br>
                                <button className={styles.btn__login}><Link href='/'>LOGIN</Link></button>
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