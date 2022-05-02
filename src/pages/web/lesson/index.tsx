import styles from './lesson.module.scss'

export default function Lesson () {
    const title = 'LOGICA DE PROGRAMAÇÃO'
    return (
        <>
            <div className={styles.bodyLesson}>
                <div className={styles.header__banner}>
                    <div className={styles.header__box}>
                        <h1>{title}</h1>
                        <br></br>
                        <p>Aprenda a logica por traz dos algoritimos, como os sistemas sao criados, um pouco de estrutura de repetição, condicional, variaveis, tipos de variaveis, otimização e o peso computacinal de um algoritimo</p>
                    </div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.box__video}>
                    <div className={styles.video}>
                        video
                    </div>
                </div>
                <div className={styles.content}>
                    <h3>#1 - SOBRE O CURSO</h3>
                    <p> Aprenda a logica por traz dos algoritimos, como os sistemas sao criados, um pouco de estrutura de repetição, condicional, variaveis, tipos de variaveis, otimização e o peso computacinal de um algoritimo Aprenda a logica por traz dos algoritimos, como os sistemas sao criados, um pouco de estrutura de repetição, condicional, variaveis, tipos de variaveis, otimização e o peso computacinal de um algoritimo
                        Aprenda a logica por traz dos algoritimos, como os sistemas sao criados, um pouco de estrutura de repetição, condicional, variaveis, tipos de variaveis, otimização e o peso computacinal de um algoritimo
                        Aprenda a logica por traz dos algoritimos, como os sistemas sao criados, um pouco de estrutura de repetição, condicional, variaveis, tipos de variaveis, otimização e o peso computacinal de um algoritimo Aprenda a logica por traz dos algoritimos, como os sistemas sao criados, um pouco de estrutura de repetição, condicional, variaveis, tipos de variaveis, otimização e o peso computacinal de um algoritimo
                    </p>
                </div>
                <div className={styles.box__chat}>
                    <div className={styles.chat}>
                        <img src='https://wowxwow.com/wp-content/uploads/2018/02/xsullo-eyesee.jpg'></img>
                        <div className={styles.chat_2}>
                        </div>
                    </div>
                </div>
            
            </div>
        </>
    )
}