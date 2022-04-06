import Head from 'next/head';
import Link from 'next/link';
import styles from './home.module.scss';


export default function Home() {
   return (
      <>
         <Head>
            <title>Home</title>
         </Head>

         <main className={styles.contentContainer}>
            <div>
               <p>a</p>
            </div>
         </main>
      </>
   )
}
