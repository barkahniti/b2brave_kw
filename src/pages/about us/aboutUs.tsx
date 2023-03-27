import Image from "next/image";
import { FC } from "react";
import styles from './aboutUs.module.css'

const AboutUsPage: FC = () => {
    return (
        <div className={styles.container}>
            <Image src={require('../../../assets/backgroundImage/Beveled Cone.svg')} alt='' className={styles.beveledCone}/>
            <Image src={require('../../../assets/backgroundImage/Chain.png')} alt='' className={styles.chain}/>
            <Image src={require('../../../assets/backgroundImage/Elliptical bangle.png')} alt='' className={styles.ellipticalBangle}/>
            <Image src={require('../../../assets/backgroundImage/Sharp Donut.png')} alt='' className={styles.sharpDonut}/>
            <Image src={require('../../../assets/backgroundImage/Wide Half Ring.png')} alt='' className={styles.wideHalfRing}/>
            <Image src={require('../../../assets/backgroundImage/Wireframe Cylinder.png')} alt='' className={styles.wireframeCylinder}/>
            <Image src={require('../../../assets/backgroundImage/Wireframe sphere.png')} alt='' className={styles.wireframeSphere}/>
            <div className={styles.contentContainer}>
                <div className={styles.textContainer}>
                    <p className={styles.title}>What is B2Brave ?</p>
                    <p className={styles.paragraf}>B2Brave is a people development program focusing on Telkom Regional Employees to help them gain product knowledge and soft skills (communication and negotiation skills) to facing Telkom Business Transformation from B2C to B2B. This program involves a range of activities such as E-Learning (B2B Product Knowledge), Training (Negotiation & Communication Skills, and In-Field Training (Coaching & Buddy System).</p>
                    <p className={styles.paragraf}>B2Brave is designed to support employees at all stages of their careers, from entry-level positions to executive leadership. It can be tailored to meet the needs of individual employees or specific teams, as well as the overall objectives of the organization.</p>
                </div>
                <div className={styles.photoContainer}>
                    <Image src={require('../../../assets/backgroundImage/Mask group.png')} alt='' className={styles.photo} />
                </div>
            </div>
        </div>
    )
}

export default AboutUsPage;