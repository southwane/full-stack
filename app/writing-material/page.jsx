import styles from "./styles.module.css"
import Link from "next/link";
import Image from "next/image";
import pic1 from '../img/image1.png'
import pic2 from '../img/image2.png'

export default function writingMaterial () {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1 className={styles.title}>writing material page</h1>
        </div>

        <p className={styles.paragraph}>
            Affilate offers for various writing material
        </p>
        <div className={styles.grid}>
          <div className={styles.items}>
            <Image
              src={pic1}
              width={300}
              height={300}
              blurDataURL="data:..."
              placeholder="blur"
            />
            <p className={styles.productInfo}>
              "2 Packs 10-in 1 Multi-Tool Pen Set, Gifts For Men, - LED Light,
              Stylus, Ruler, Level, Bottle Opener, Screwdriver, Ballpoint,
              Construction, Pen, Stocking Stuffers Gifts For Men, Him,
              Boyfriend, Grandpa 👉 -85% off discount+EXTRA 30% OFF❤️ 🎉
              Exclusive deal[$2.86] -85% 👉 item link: ⚠️ Every New App User can
              only enjoy once"
            </p>
            <Link href={"https://temu.to/m/uwa5q84zm89"}>writing pen</Link>
          </div>
          <div className={styles.items}>
            <Image
              src={pic2}
              width={300}
              height={300}
              blurDataURL="data:..."
              placeholder="blur"
            />
            <p className={styles.productInfo}>
              10-Pack Of Quick-Drying 0.5mm Fine Point Rollerball Pens-Perfect
              For Writing And Drawing! 👉 -87% off discount+EXTRA 30% OFF❤️ 🎉
              Exclusive deal[$1.14] -87% 👉 item link: ⚠️ Every New App User can
              only enjoy once
            </p>
            <Link href={" https://temu.to/m/uvoquojiabh"}>writing pen</Link>
          </div>
        </div>
      </div>
    );
}