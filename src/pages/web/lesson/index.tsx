import styles from './lesson.module.scss'

export default function Lesson () {
    const content = {
        title: 'LOGICA DE PROGRAMAÇÃO',
        subTitle: 'Aprenda a logica por traz dos algoritimos, como os sistemas sao criados, um pouco de estrutura de repetição, condicional, variaveis, tipos de variaveis, otimização e o peso computacinal de um algoritimo',
        titleText: '#1 - SOBRE O CURSO',
        media: 'https://miro.medium.com/max/1000/1*8Uv7_YTCQxyLzrev7rKiDw.jpeg',
        text: 'Aprenda a logica por traz dos algoritimos, como os sistemas sao criados, um pouco de estrutura de repetição, condicional, variaveis, tipos de variaveis, otimização e o peso computacinal de um algoritimo Aprenda a logica por traz dos algoritimos, como os sistemas sao criados, um pouco de estrutura de repetição, condicional, variaveis, tipos de variaveis, otimização e o peso computacinal de um algoritimo Aprenda a logica por traz dos algoritimos, como os sistemas sao criados, um pouco de estrutura de repetição, condicional, variaveis, tipos de variaveis, otimização e o peso computacinal de um algoritimo Aprenda a logica por traz dos algoritimos, como os sistemas sao criados, um pouco de estrutura de repetição, condicional, variaveis, tipos de variaveis, otimização e o peso computacinal de um algoritimo Aprenda a logica por traz dos algoritimos, como os sistemas sao criados, um pouco de estrutura de repetição, condicional, variaveis, tipos de variaveis, otimização e o peso computacinal de um algoritimo'
    }
    return (
        <>
            <div className={styles.bodyLesson}>
                <div className={styles.header__banner}>
                    <div className={styles.header__box}>
                        <h1>{content.title}</h1>
                        <br></br>
                        <p>{content.subTitle}</p>
                    </div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.box__media}>
                    <div className={styles.media}>
                        <img src={content.media} alt={content.titleText} />
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.text}>
                    <h3>{content.titleText}</h3>
                    <p>
                        {content.text}
                    </p>
                    </div>
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