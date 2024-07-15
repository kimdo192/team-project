import { Link } from "react-router-dom";
import styles from "./Mypage.module.css";
import home from './image/home.png';
import profile from './image/boji.jpg';
import plus from './image/plus.png';
import github from './image/github-logo.png';

export default function Mypage(){
    return(
        <>
        <div className={styles["background"]}>
            <div className={styles["home-box"]}>
                <Link href="Mypage.jsx"><img className={styles["home"]} src={home} alt="X"/></Link>
            </div>
            <div className={styles["profile-box"]}>
                <img className={styles["profile"]} src={profile} />
                <img className={styles["plus"]} src={plus} />
            </div>
            <div className={styles["stack-box"]}>
                <div className={styles["box"]}>
                    <input type="checkbox" id="popup"/>
                    <label for="popup"><img className={styles["stack-plus"]} src={plus} /></label>
                    <div>
                        <div>
                        </div>
                        <label for="popup"></label>
                    </div>
                </div>
                <a href="https://github.com/kimdo192" target="_blank"><img className={styles["github"]} src={github} /></a>
            </div>
        </div>
        </>
    );
}