import styles from './styles.module.scss'
import {ActiveLink} from '../ActiveLink';


export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src='/images/devLearning.svg' alt="devLearning" />
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