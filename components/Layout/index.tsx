import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';
import styles from './Layout.module.css';
import { Children, ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
    pageTitle: string;
}

export default function Layout(props: LayoutProps) {
    const { children, pageTitle } = props;
    return (
    <>
    <Head>
        <title>Simple Web | { pageTitle }</title>
        <meta name="description" content="Website Simple NextJS" />
    </Head>
    <div className={styles.container}>
        <Header />
            <div className={styles.content}>{ children }</div>
        <Footer />
    </div>
    </>
  )
}
