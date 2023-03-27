import Image from "next/image";
import { FC } from "react";
import styles from './heroPage.module.css'

const HeroPage: FC = () => {
    const header = `Be ${<span className={styles.titleUnderlined}>Brave</span>} for B2B\nTransformation`;
    const body = 'Prepares you for the B2B transformation through a structured and intentional approach to developing skills, knowledge, and capabilities'
    return (
        <div>
            <div className={styles.mainContainer}>
                <div className={styles.textContainer}>
                    <p className={styles.title}>Be <span className={styles.titleUnderlined}>Brave</span> for B2B Transformation</p>
                    <p className={styles.content}>{body}</p>
                    <div className={styles.buttonContainer}>
                    <button className={styles.button}><p className={styles.buttonText}>Get to know B2Brave</p></button>
                    </div>
                    <div className={styles.arrowContainer}>
                        <Image src={require('../../../assets/backgroundImage/ArrowDown.png')} alt='arrow under' className={styles.arrow} />
                    </div>
                </div>
                <div className={styles.logoContainer}>
                    <Image src={require('../../../assets/backgroundImage/Rectangle.png')} alt='logo 2' className={styles.logo} width={600}/>
                    <Image src={require('../../../assets/backgroundImage/RectengleShadow.png')} alt='logo 2 shadow' className={styles.logoShadow} width={600}/>
                </div>
            </div>
            <Image src={require('../../../assets/backgroundImage/Ellipse1.png')} alt='' className={styles.eclipse}/>
        </div>
    )
}

export default HeroPage;