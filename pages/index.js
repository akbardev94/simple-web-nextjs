import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import Image from 'next/image';


export default function Home() {
  return (
      <Layout pageTitle="Home Page">
        <img className={styles.heroImage} src="/assets/hero.png" alt="Hero" />
            <h2 className="text-primary position-relative top-50 start-0 translate-middle-y">Welcome Simple Website</h2>
            <h5 className="text-dark mt-3 position-relative top-50 start-0 translate-middle-y">"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</h5>
            <a className="btn btn-primary btn-lg mt-5 position-relative top-50 start-0 translate-middle-y" href="/blogs">INFO BLOG</a>
      </Layout>
  )
}
