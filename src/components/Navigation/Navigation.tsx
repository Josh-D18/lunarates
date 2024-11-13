"use client";

import Image from "next/image";
import logo from "../../../public/assets/logo.png";
import styles from "./Navigation.module.css";
import Link from "next/link";
import hamburger from "../../../public/assets/burgerIcon.png";
import darkHamburger from "../../../public/assets/burgerIconDark.png";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const name = e.currentTarget.getAttribute("name");

    if (name === "open") {
      setIsOpen(false);
    } else if (name === "close") {
      setIsOpen(true);
    }
  };

  return (
    <nav className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={logo}
          width={150}
          height={150}
          alt={"Lunarates logo"}
          className={styles.img}
        />
      </div>

      <Image
        src={hamburger}
        width={30}
        height={30}
        alt="hamburger icon"
        className={`${styles.imgHamburger} ${!isOpen && "hidden"}`}
        name={"open"}
        onClick={handleClick}
      />
      <ul className={`${styles.navContainer} ${isOpen ? "hidden" : "flex"}`}>
        <Image
          src={darkHamburger}
          width={30}
          height={30}
          alt="hamburger icon"
          className={`${styles.imgHamburger} ${styles.darkImgHamburger} ${
            isOpen && "hidden"
          }`}
          name={"close"}
          onClick={handleClick}
        />
        <Link href="/" className={styles.link}>
          Profile
        </Link>
        <Link href="/" className={styles.link}>
          Calculator
        </Link>
        <Link href="/" className={styles.link}>
          Blog
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
