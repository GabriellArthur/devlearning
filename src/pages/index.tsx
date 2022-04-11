import Head from 'next/head';
import styles from './home.module.scss';

export default function Home() {
   return (
      <>
         <Head>
            <title>Home</title>
         </Head>

         <main className={styles.contentContainer}>
            <section className={styles.hero}>
               <h1>Seja um desenvolvedor Web</h1>
               <span>Aprenda o basico para criar o seu primeiro site</span>
               <p>Este site foi construido por alunos de ciencias da computacao da universidade catolica, com ituito de ajudar outros alunos na sua carreira, aqui veremos o basico em logica de programacao, html, css e java script, alem de um guia de carreira para que voce possa ir alem e possa crescer na sua carreira</p>
               
               <a href="/web/class"><button className={styles.button}>Inicar Curso</button></a>
               <a href="/web/about"><button className={styles.buttonActive}>Saiba mais</button></a>
            </section>
            <aside className={styles.lottie}>
               <img src='/images/computador-hello-world.svg' alt="devLearning" />
            </aside>
         </main>
         <div className={styles.linha}>
         </div>
         <footer className={styles.footer}>
            <h2>Desenvolvido por Luiz Claudio, Yaman Augusto, Gabriel Arthur, Douglas Figueroa</h2>
         </footer>
      </>
   )
}
