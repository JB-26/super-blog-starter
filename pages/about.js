import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Footer from "../components/footer";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/about.module.css";
import Image from "next/image";
import Img from "../public/images/me.webp";

export default function About() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta charSet="utf-8" />
      </Head>
      <section className={utilStyles.headingMd}>
        <h1 className={utilStyles.headingXl}>A bit about me</h1>
        <i>Change this text and photo!</i>
      </section>
      <section className={`${utilStyles.headingMd}`}>
        <p>
          <Image
            className={styles.imageAboutRight}
            priority
            src={Img}
            alt="I sure love donuts 🍩"
          />
          You can add some text right here! Make sure to change the photo!
          <br></br>
          <br></br>
          You can even add the use of icons from Fontawesome if you want to (in
          case you do not like using text in the footer).
          <br></br>
          <br></br>
          Always make sure to read the README.md of this project in case you get
          stuck!
          <br></br>
          <br></br>
          Have fun and enjoy setting up a blog of your own!{" "}
          <span role="img" aria-label="string">
            👋
          </span>
        </p>
      </section>
      <Footer></Footer>
    </Layout>
  );
}
