import Head from "next/head";
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List || Home</title>
        <meta name="keyword" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium nulla provident quae sint magnam nostrum blanditiis earum, vitae perspiciatis, dolorem obcaecati tempora placeat ea quibusdam nihil nisi distinctio numquam illo.</p>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium nulla provident quae sint magnam nostrum blanditiis earum, vitae perspiciatis, dolorem obcaecati tempora placeat ea quibusdam nihil nisi distinctio numquam illo.</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninjas Listing</a>
        </Link>
      </div>
    </>
  )
}
