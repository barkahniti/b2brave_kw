import Image from "next/image";
import { FC } from "react";
import styles from './memberPage.module.css';

const MemberPage: FC = () => {
    return(
        <div className={styles.circleContainer}>
            <Image src={require('../../../assets/backgroundImage/lingkaranbesar.png')} alt='' className={styles.circle1} />
            <Image src={require('../../../assets/backgroundImage/lingkaranbesar.png')} alt='' className={styles.circle2} />
            <div className={styles.container}>
                <p className={styles.title}>Meet Our Team Members</p>
                <div className={styles.memberContainer}>
                    <Image src={require('../../../assets/backgroundImage/Member1.png')} alt='' className={styles.member} />
                    <Image src={require('../../../assets/backgroundImage/Member2.png')} alt='' className={styles.member} />
                    <Image src={require('../../../assets/backgroundImage/Member3.png')} alt='' className={styles.member} />
                    <Image src={require('../../../assets/backgroundImage/Member4.png')} alt='' className={styles.member} />
                    <Image src={require('../../../assets/backgroundImage/Member5.png')} alt='' className={styles.member} />
                    <Image src={require('../../../assets/backgroundImage/Member6.png')} alt='' className={styles.member} />
                </div>
            </div>
        </div>
    )
}

export default MemberPage;