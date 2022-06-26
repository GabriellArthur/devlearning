import styles from './styles.module.scss'
import {ActiveLink} from '../ActiveLink';
import { useAuth } from "../../pages/web/hooks/useAuth";
import Link from 'next/link';
import { parseCookies } from "nookies";

export function Header() {
  const { user, signOut } = useAuth();
  const cookies = parseCookies();
  const token = cookies["@devlearning.token"];

  
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
         <Link href="/">
            <img className={styles.logo} src='/images/devLearning.svg' alt="devLearning" />
         </Link>
        <nav>
          <ActiveLink href='/' activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink href='/web/class' activeClassName={styles.active}>
            <a>Aulas</a>
          </ActiveLink>
          { token
            ? <a onClick={() => signOut()}>Sair</a>
            : <ActiveLink href='/web/login' activeClassName={styles.active}>
                <a>Login</a>
              </ActiveLink>
          }
        </nav>
      </div>
    </header>
  )
}