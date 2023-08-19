import styles from "./signature.module.css";
import Image from "next/image";
import Photo from "../public/images/profile.webp";
import Link from "next/link";

export default function Signature() {
  return (
    <div className={styles.signature}>
      <hr className={styles.line} />
      <div className={styles.format}>
        <div className={styles.image}>
          <Image alt="A photo of me!" className={styles.image} src={Photo} />
        </div>
        <div>
          <p className={styles.info}>
            You need to change the text here! Open the components/signature.js file and get started!
          </p>
        </div>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
