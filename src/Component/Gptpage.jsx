import styles from './Gptpage.module.css';
import { Link } from "react-router-dom";
import home from './image/home.png';
import person from './image/user.png';
import folder from './image/folder.png';

export default function Gptpage(){
    return(
        <>
        <div className={styles["background"]}>
            <div className={styles["Link-box"]}>
                <div className={styles["home-box"]}>
                    <Link href="Mypage.jsx"><img className={styles["home"]} src={home} alt="X"/></Link>
                </div>
                <div className={styles["home-box"]}>
                    <Link href="Mypage.jsx"><img className={styles["person"]} src={person} alt="X"/></Link>
                </div>
                <div className={styles["home-box"]}>
                    <Link href="Mypage.jsx"><img className={styles["folder"]} src={folder} alt="X"/></Link>
                </div>
            </div>
            
        </div>
        </>
    )
}