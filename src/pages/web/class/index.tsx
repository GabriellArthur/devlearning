import Head from 'next/head';
import Link from 'next/link';
import styles from './styles.module.scss';

export default function Class () {
    const courses = [
        {
            title: 'Logica de programacao',
            text: 'A lógica de programação é a maneira como se escreve um algoritmo, que nada mais é do que uma sequência de passos necessários, para que uma função seja executada.',
            link: '/web/lesson',
            srcImg: 'https://blog.dankicode.com/wp-content/uploads/2019/08/logica-de-programac%CC%A7a%CC%83o-para-iniciantes.png',
            name: 'logica de programacao'
        },
        {
            title: 'HTML',
            text: 'HTML (Linguagem de Marcação de Hipertexto) é o código que você usa para estruturar uma página web e seu conteúdo. Por exemplo, o conteúdo pode ser estruturado em parágrafos, em uma lista com marcadores ou usando imagens e tabelas.',
            link: '/web/lesson',
            srcImg: 'https://media.istockphoto.com/vectors/programming-code-application-window-vector-id1124838925?k=20&m=1124838925&s=612x612&w=0&h=lKkgavYLrbDtSnQivxMm3_4ThyovkQEFvbOb2Dv3O6g=',
            name: 'html'
        },
        {
            title: 'CSS',
            text: 'CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem de marcação como HTML. O CSS separa o conteúdo da representação visual do site',
            link: '/web/lesson',
            srcImg: 'https://fiodevida.com/wp-content/uploads/2021/04/GettyImages-1066987348-66e3879d27d244b3b8276484db518bb5.jpg',
            name: 'css'
        },
        {
            title: 'JavaScript',
            text: 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.',
            link: '/web/lesson',
            srcImg: 'https://programadorviking.com.br/wp-content/uploads/2020/12/Programacao-JavaScript-380x249.jpg',
            name: 'javascript'
        },
    ]

    const list = courses.map(
        (e) =>
            <div className={styles.item_list}>
                <div className={styles.desc__class}>
                    <h2>{e.title}</h2>
                    <p>{e.text}</p>
                    <a href={e.link}><button className={styles.button}><Link href={e.link}>ACESSAR CURSO</Link></button></a>
                </div>
                <div className={styles.img__class}>
                    <img src={e.srcImg} alt={e.name} />
                </div>
            </div>
    )

    return (
        <>
        <Head>
            <title>Aulas</title>
        </Head>
        <div className={styles.class}>
            <div className={styles.header__title}>
                <h1 className={styles.title}>Cursos</h1>
                <div className={styles.line__title}></div>
            </div>
            <div className={styles.header__class}>
                    <ul>
                        <li>
                            <a><button className={styles.button__new}><Link href="/web/newClass">CRIAR CURSO</Link></button></a>
                        </li>
                    </ul>
                </div>
            <div className={styles.list__class}>
                <ul>{list}</ul>
            </div>
            <footer className={styles.footer}>
                <h2>Desenvolvido por Luiz Claudio, Yaman Augusto, Gabriel Arthur, Douglas Figueroa</h2>
            </footer>
        </div>
        </>
    )
}