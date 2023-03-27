import BackgroundContainer from "@/component/container/background/main/backgroundMain";
import AboutUsPage from "@/pages/about us/aboutUs";
import HeroPage from "@/pages/hero/heroPage";
import Image from "next/image";
import { FC } from "react";
import { Link } from 'react-scroll';
import styles from './mainRouter.module.css'

const MainRouter: FC = () => {
    return (
    <div>
      <header className={styles.nav}>
        <nav className={styles.nav__container__actions}>
            <div className={styles.nav__list}>
            <Image src={require('../../../../assets/backgroundImage/B2Brave logo text 1.png')} alt='logo' className={styles.logo} />
            <ul className={styles.router__ul}>
                <li className={styles.router__li}>
                    <Link activeClass="active" smooth spy to="home" className={styles.navbar__title}>
                        Home
                    </Link>
                </li>
                <li className={styles.router__li}>
                    <Link activeClass="active" smooth spy to="aboutUs" className={styles.navbar__title}>
                        About Us
                    </Link>
                </li>
                <li className={styles.router__li}>
                    <Link activeClass="active" smooth spy to="blog" className={styles.navbar__title}>
                        Our Programs 
                    </Link>
                </li>
                <li className={styles.router__li}>
                    <Link activeClass="active" smooth spy to="contact" className={styles.navbar__title}>
                        Journey
                    </Link>
                </li>
                <li className={styles.router__li}>
                    <Link activeClass="active" smooth spy to="contact" className={styles.navbar__title}>
                        Our Team
                    </Link>
                </li>
            </ul>
            </div>
        </nav>
      </header>
      <BackgroundContainer>
        <section className={styles.router__section} id="home"><HeroPage /></section>
        <section className={styles.router__section} id="aboutUs"><AboutUsPage /></section>
      </BackgroundContainer>
    </div>
    )
}

export default MainRouter;