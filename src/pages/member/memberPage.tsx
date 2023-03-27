import Image from "next/image";
import { FC } from "react";
import styles from './memberPage.module.css';

const MemberPage: FC = () => {
    return(
        <div className={styles.circleContainer}>
            <Image src={require('../../../assets/backgroundImage/lingkaran besar.png')} alt='' className={styles.circle1} />
            <Image src={require('../../../assets/backgroundImage/lingkaran besar.png')} alt='' className={styles.circle2} />
            <div className={styles.container}>
                <p className={styles.title}>Meet Our Team Members</p>
                <div className={styles.memberContainer}>
                    <Image src={require('../../../assets/backgroundImage/Member 1.png')} alt='' className={styles.member} />
                    <Image src={require('../../../assets/backgroundImage/Member 2.png')} alt='' className={styles.member} />
                    <Image src={require('../../../assets/backgroundImage/Member 3.png')} alt='' className={styles.member} />
                    <Image src={require('../../../assets/backgroundImage/Member 4.png')} alt='' className={styles.member} />
                    <Image src={require('../../../assets/backgroundImage/Member 5.png')} alt='' className={styles.member} />
                    <Image src={require('../../../assets/backgroundImage/Member 6.png')} alt='' className={styles.member} />
                </div>
            </div>
        </div>
    )
}

export default MemberPage;