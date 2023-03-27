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
        </div>
    )
}

export default AboutUsPage;