import Image from "next/image";
import { FC } from "react";
import styles from './background.module.css';

const BackgroundItems: FC = _ => {
    return (
        <div className={styles.container}>
            <Image src={require('../../../../../assets/backgroundImage/Rectangle1.png')} alt='' className={styles.rectangle}/>
            <Image src={require('../../../../../assets/backgroundImage/Vector4.png')} alt='' className={styles.vector}/>
        </div>
    )
}

export default BackgroundItems;