import Head from 'next/head';
import styles from './home.module.scss';


export default function Home() {
   return (
      <>
         <Head>
            <title>Home</title>
         </Head>

         <main className={styles.contentContainer}>
            <div>
               <p>A</p>
            </div>
         </main>
      </>
   )
}
