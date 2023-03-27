import BackgroundContainer from "@/component/container/background/main/backgroundMain";
import AboutUsPage from "@/pages/about us/aboutUs";
import HeroPage from "@/pages/hero/heroPage";
import JourneyPage from "@/pages/journey/journey";
import MemberPage from "@/pages/member/memberPage";
import OurPrograms from "@/pages/our program/ourPrograms";
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
                <Link activeClass={styles.router__li__active} smooth spy to="home" offset={50} className={styles.router__li}>
                    Home
                </Link>
                <Link activeClass={styles.router__li__active} smooth spy to="aboutUs" offset={200} className={styles.router__li}>
                    About Us
                </Link>
                <Link activeClass={styles.router__li__active} smooth spy to="ourProgram" offset={-100} className={styles.router__li}>
                    Our Programs 
                </Link>
                <Link activeClass={styles.router__li__active} smooth spy to="journey" offset={-100} className={styles.router__li}>
                    Journey
                </Link>
                <Link activeClass={styles.router__li__active} smooth spy to="member" offset={50} className={styles.router__li}>
                    Our Team
                </Link>
            </ul>
            </div>
        </nav>
      </header>
      <BackgroundContainer>
        <section className={styles.router__section} id="home"><HeroPage /></section>
        <section className={styles.router__section__aboutUs} id="aboutUs"><AboutUsPage /></section>
        <section className={styles.router__section__ourProgram} id="ourProgram"><OurPrograms /></section>
        <section className={styles.router__section__joruney} id="journey"><JourneyPage /></section>
        <section className={styles.router__section__member} id="member"><MemberPage /></section>
      </BackgroundContainer>
    </div>
    )
}

export default MainRouter;