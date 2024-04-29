import React from "react";
import Link from "next/link";
import styles from "./styles.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">CPWRITER</div>
      <ul className="ul">
        <li className="li">
          <Link href={"/apps-to-learn-web-development"} className="a">
            LEARNING APPS
          </Link>
        </li>
        <li className="li">
          <Link href={"/cpwriter/email-samples"} className="a">
            EMAIL SAMPLES
          </Link>
        </li>
        <li className="li">
          <Link href={"/cpwriter/article-samples"} className="a">
            ARTICLE SAMPLES
          </Link>
        </li>
        {/* <li className="li">
          <Link href={"/writing-material"} className="a">
            WRITING MATERIAL
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
