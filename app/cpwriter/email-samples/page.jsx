import styles from "./styles.module.css"
import Link from "next/link";

export default function emailSamples () {
     console.log("email samples");
    return (
      <div className={styles.wrapper}>
          <h1 className={styles.title}>Email samples</h1>
        <div className={styles.grid}>

          <div className={styles.container}>
          <h2 className={styles.subheading}>EMAIL MARKETING</h2>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <Link href={"/"}>
                  Email marketing example, for CS Frontline, an online cyber
                  security training program.
                </Link>
              </li>
            </ul>
            <ul className={styles.ul}>
              <li className={styles.lir2}>
                <Link href={"/"}>
                  Email marketing example, for legoscript, an online powershell and bash scripting training certificate 
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.container}>
          <h2 className={styles.subheading}>SALES EMAIL</h2>
            <ul className={styles.ul2}>
              <li className={styles.li}>
                <Link href={"/"}>
                  Sales email example that promotes post workout viatimins and protein supplements.
                </Link>
              </li>
              <li className={styles.lir2}>
                <Link href={"/"}>
                  Sales email example that promotes dog and cat products </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}