import BackgroundItems from "@/component/container/background/misc/backgroundMisc";
import Image from "next/image";
import { FC } from "react";
import styles from './background.module.css'

interface BackgroundContainerProps {
    children: React.ReactNode
}

const BackgroundContainer: FC<BackgroundContainerProps> = (props) => {
    return (
        <div className={styles.backgroundImage}>
            <div className={styles.image}/>
            <BackgroundItems />
            {props.children}
        </div>
    )
}

export default BackgroundContainer;