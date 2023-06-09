import Image from "next/image";
import { FC } from "react";
import styles from './ourPrograms.module.css'

const OurPrograms: FC = () => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>Our Programs</p>
            <div className={styles.contentContainer}>
                <Image src={require('../../../assets/backgroundImage/Program1.png')} alt="program 1" className={styles.program} />
                <Image src={require('../../../assets/backgroundImage/Program2.png')} alt="program 1" className={styles.program} />
                <Image src={require('../../../assets/backgroundImage/Program3.png')} alt="program 1" className={styles.program} />
            </div>
        </div>
    )
}

export default OurPrograms;