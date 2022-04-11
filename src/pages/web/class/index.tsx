import styles from './styles.module.scss';

export default function Class () {
    return (
        <>
        <div className={styles.class}>
            <div className={styles.header__title}>
                <h1 className={styles.title}>Cursos</h1>
                <div className={styles.line__title}></div>
            </div>
            <div className={styles.list__class}>
                <div className={styles.item_list}>
                    <div className={styles.desc__class}>
                        <h2>Logica de programacao</h2>
                        <p>A lógica de programação é a maneira como se escreve um algoritmo, que nada mais é do que uma sequência de passos necessários, para que uma função seja executada.</p>
                        <a href="/web/class"><button className={styles.button}>ACESSAR CURSO</button></a>
                    </div>
                    <div className={styles.img__class}>
                        <img src="https://blog.dankicode.com/wp-content/uploads/2019/08/logica-de-programac%CC%A7a%CC%83o-para-iniciantes-380x249.png" alt="logica de programacao" />
                    </div>
                </div>
                <div className={styles.item_list}>
                    <div className={styles.desc__class}>
                        <h2>HTML</h2>
                        <p>HTML (Linguagem de Marcação de Hipertexto) é o código que você usa para estruturar uma página web e seu conteúdo. Por exemplo, o conteúdo pode ser estruturado em parágrafos, em uma lista com marcadores ou usando imagens e tabelas.</p>
                        <a href="/web/class"><button className={styles.button}>ACESSAR CURSO</button></a>
                    </div>
                    <div className={styles.img__class}>
                        <img src="https://blog.dankicode.com/wp-content/uploads/2019/08/logica-de-programac%CC%A7a%CC%83o-para-iniciantes-380x249.png" alt="" />
                    </div>
                </div>
                <div className={styles.item_list}>
                    <div className={styles.desc__class}>
                        <h2>CSS</h2>
                        <p>CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem de marcação como HTML. O CSS separa o conteúdo da representação visual do site</p>
                        <a href="/web/class"><button className={styles.button}>ACESSAR CURSO</button></a>
                    </div>
                    <div className={styles.img__class}>
                        <img src="https://blog.dankicode.com/wp-content/uploads/2019/08/logica-de-programac%CC%A7a%CC%83o-para-iniciantes-380x249.png" alt="" />
                    </div>
                </div>
                <div className={styles.item_list}>
                    <div className={styles.desc__class}>
                        <h2>JavaScript</h2>
                        <p>JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.</p>
                        <a href="/web/class"><button className={styles.button}>ACESSAR CURSO</button></a>
                    </div>
                    <div className={styles.img__class}>
                        <img src="https://blog.dankicode.com/wp-content/uploads/2019/08/logica-de-programac%CC%A7a%CC%83o-para-iniciantes-380x249.png" alt="" />
                    </div>
                </div>
            </div>
            <footer className={styles.footer}>
                <h2>Desenvolvido por Luiz Claudio, Yaman Augusto, Gabriel Arthur, Douglas Figueroa</h2>
            </footer>
        </div>
        </>
    )
}