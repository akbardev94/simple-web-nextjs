import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
 return (
    <header className={styles.container}>
        <ul className={styles.list}>
            <li className={styles.item}><Link href="/">Home</Link></li>
            <li className={styles.item}><Link href="/blogs">Blog</Link></li>
            <li className={styles.item}><Link href="/users">User</Link></li>
        </ul>
    </header>
 )
}
