import Link from "next/link"
import styles from './styles.module.css'



export default function cpWriter () {
    console.log("cpwriter route.");
    return (
      <>
        <div className={styles.wrapper}>
          <span className={styles.title}>Hey there! I&apos;m cpwriter,</span>

          <p className={styles.paragraph1}>
            I am a driven and dedicated content developer, that enjoys creating
            original content for blogs and websites, in addition to writing
            engaging emails that convert readers. Whether sales copy, email
            marketing, web page content, I&apos;m here to help you. We all have
            to start somewhere, so don&apos;t let my lack of expertise in the
            industry fool you.
          </p>
        </div>
      </>
    );
    
}

/*
  Hi there! I'm **cpwriter**, a driven and committed copywriter, and I'm
        prepared to make your writing come to life. Don't be deceived by my
        inexperience in the field. I appreciate providing engaging copy, and I
        have an abundance of imagination and versatility.
      </> */