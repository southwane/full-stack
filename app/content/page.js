import styles from './styles.module.css'
import Link from 'next/link';

export default function Content () {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h2 className={styles.h2}>
            Unlocking Web Development Skills: A Journey Through Top Educational
            Apps
          </h2>
          <p className={styles.introduction}>
            In an era where digital literacy is paramount, mastering web
            development skills has become a gateway to countless opportunities.
            Fortunately, the journey to becoming proficient in HTML, CSS, and
            JavaScript through apps to learn web development is now more
            accessible than ever, thanks to a myriad of educational apps
            designed to guide aspiring developers through their learning
            process. Among the most popularly recommended apps are:
          </p>
        </div>
        <div className={styles.subjectContainer}>
          <h3 className={styles.h3}>
            <Link className={styles.a} href={"https://www.codecademy.com/"}>
              codecademy
            </Link>
          </h3>
          <p className={styles.paragraph}>
            is well-known for its interactive learning environment, which
            combines practical coding exercises with well-organized,
            comprehensible tutorials on HTML, CSS, and JavaScript. Some users
            discover that its free content is restricted, and that full access
            necessitates a premium membership.
          </p>
        </div>
        <div className={styles.subjectContainer}>
          <h3 className={styles.h3}>
            <Link className={styles.a} href={"https://www.freecodecamp.org/"}>
              freeCodeCamp
            </Link>
          </h3>

          <p className={styles.paragraph}>
            with a focus on practical projects, this community-driven platform
            provides a comprehensive curriculum covering many facets of web
            development. Despite the abundance of materials it offers, the depth
            of information might be daunting for those who are new to the site.
          </p>
        </div>
        <div className={styles.subjectContainer}>
          <h3 className={styles.h3}>
            <Link className={styles.a} href={"https://www.sololearn.com/en/"}>
              sololearn
            </Link>
          </h3>

          <p className={styles.paragraph}>
            bite-sized courses ideal for brief learning sessions are offered by
            SoloLearn, which also offers a gamified learning environment to keep
            users interested. Its community features are less interesting to
            some users, and its depth might not be as deep as that of other
            platforms.
          </p>
        </div>
        <div className={styles.subjectContainer}>
          <h3 className={styles.h3}>
            <Link className={styles.a} href={"https://www.coursera.org/"}>
              coursera
            </Link>
          </h3>

          <p className={styles.paragraph}>
            Coursera gives you the freedom to study at your own speed by
            offering courses from respectable colleges and organizations. Its
            more expensive price and less interactive features in comparison to
            specialized coding platforms, however, can put off some users.
          </p>
        </div>
        <div className={styles.subjectContainer}>
          <h3 className={styles.h3}>
            <Link className={styles.a} href={"https://www.udemy.com/"}>
              udemy
            </Link>
          </h3>

          <p className={styles.paragraph}>
            Udemy offers a variety of web development courses that may be
            completed at your own pace using on-demand video lectures. The
            quality of a course can vary greatly depending on the instructor,
            even though it is often undervalued.
          </p>
        </div>
        <div className={styles.subjectContainer}>
          <h3 className={styles.h3}>
            <Link className={styles.a} href={"https://www.w3schools.com/"}>
              W3Schools
            </Link>
          </h3>

          <p className={styles.paragraph}>
            W3Schools Offline offers extensive offline reference content for
            HTML, CSS, and JavaScript that may be accessed quickly. But unlike
            other platforms, it does not have interactive coding lessons and
            might not provide as structured of a learning path.
          </p>
        </div>
        <div className={styles.subjectContainer}>
          <h3 className={styles.h3}>
            <Link className={styles.a}  href={"https://www.theodinproject.com/"}>
              theodinproject
            </Link>
          </h3>

          <p className={styles.paragraph}>
            With community-driven assistance, this free and open-source program
            focuses on real-world projects and portfolio creation. But unlike
            platforms with video classes, it lacks instructional content and
            demands self-discipline to work through the curriculum.
          </p>
        </div>
        <hr></hr>
        <div className={styles.subjectContainer}>
          <p className={styles.conclusion}>
            In conclusion, these apps offer diverse learning experiences,
            catering to different preferences and learning styles, enabling
            aspiring developers to embark on their journey to web development
            mastery with confidence and ease. With interactive platforms like
            codecademy and community-driven resources such as freeCodeCamp,
            learners have access to structured lessons, real-world projects, and
            supportive communities. Whether you prefer bite-sized lessons on
            SoloLearn or in-depth courses on Coursera and Udemy, there&apos;s a
            platform tailored to your needs. Additionally, offline resources
            like W3Schools Offline provide convenient access to reference
            material. Ultimately, the abundance of
          </p>
        </div>
        <h4 className={styles.info}>written by: wanewrites</h4>
      </div>
    );
}