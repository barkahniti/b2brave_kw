import Image from "next/image";
import { FC } from "react";
import styles from './jorney.module.css'

const JourneyPage: FC = () => {
    return (
        <div className={styles.arrowContainer}>
            <Image src={require('../../../assets/backgroundImage/JourneyArrow.png')} alt='' className={styles.arrow1} />
            <Image src={require('../../../assets/backgroundImage/JourneyArrow.png')} alt='' className={styles.arrow2} />
            <Image src={require('../../../assets/backgroundImage/JourneyArrow.png')} alt='' className={styles.arrow3} />
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <p className={styles.title}>Employees</p>
                    <p className={styles.title}>Journey</p>
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.contentItemContainer}>
                        <Image src={require('../../../assets/backgroundImage/Journey1.png')} alt='journey 1' className={styles.photo}/>
                        <p className={styles.contentItem}>Survey on the employees’ readiness towards B2B transformation and pre-assessment test on B2B product knowledge and skills.</p>
                    </div>
                    <div className={styles.contentItemContainer}>
                        <p className={styles.contentItem}>
                        Training program includes e-learning, soft skills training (communication & negotiation skills), and In-field training with mentor and coach to enhance employees skills againts the company transformation from B2B to B2C.
                        </p>
                        <Image src={require('../../../assets/backgroundImage/Journey2.png')} alt='journey 2' className={styles.photo}/>
                    </div>
                    <div className={styles.contentItemContainer}>
                        <Image src={require('../../../assets/backgroundImage/Journey3.png')} alt='journey 3' className={styles.photo}/>
                        <p className={styles.contentItem}>At the end of the course, employees will take a post-assessment test to gauge what they have learned and assess their progress from the beginning to the end of the program. </p>
                    </div>
                    <div className={styles.contentItemContainer}>
                        <p className={styles.contentItem}>The certification step is essential to ensure that the participating employees have met the specified requirements and are ready to implement it towards their expertise.  </p>
                        <Image src={require('../../../assets/backgroundImage/Journey4.png')} alt='journey 4' className={styles.photo}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JourneyPage;