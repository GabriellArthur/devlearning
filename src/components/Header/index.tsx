import styles from './styles.module.scss'
import {ActiveLink} from '../ActiveLink';
import Link from 'next/link';


export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
         <Link href="/">
            <img src='/images/devLearning.svg' alt="devLearning" />
         </Link>
        <nav>
          <ActiveLink href='/' activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink href='/aulas' activeClassName={styles.active}>
            <a>Aulas</a>
          </ActiveLink>
          <ActiveLink href='/Login' activeClassName={styles.active}>
            <a>Login</a>
          </ActiveLink>

        </nav>
      </div>
    </header>
  )
}