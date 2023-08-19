import Layout, { siteTitle } from "../components/layout";
import Footer from "../components/footer";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/index.module.css";
import Head from "next/head";
import Image from "next/image";
import indexImage from "../public/images/new_2023.webp";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta charSet='utf-8' name="The personal website of IT Professional, Joshua Blewitt"/>
      </Head>
      <section className={utilStyles.headingMd}>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={utilStyles.heading2Xl}>
              YOUR NAME {"  "}
              <span role='img' aria-label='string'>
                👋
              </span>
            </h1>
            <p className={styles.known}>Your subtitle here. Open the Index.js page to edit this!</p>
            <p>
              Your introduction
            </p>
            <div className={styles.buttonContainer}>
              <a className={styles.emailButton} href='mailto:YOUR-EMAIL'>
                Get in touch!
              </a>
            </div>
          </div>
          <div className={styles.right}>
            <Image priority className={styles.image} src={indexImage} alt='Me at Dishoom in London!'/>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </Layout>
  );
}
