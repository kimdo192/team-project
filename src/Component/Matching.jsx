import styles from './Matching.module.css';

export default function Matching() {
    return (
        <>
        <div className={styles["background"]}>
            <div className={styles["main-box"]}>
                <h1>Random Matching</h1>
                <div className={styles["section"]}>
                    <form className={styles["btn-box"]}>
                        <label className={styles["btn"]}>
                            <input type="radio" name="time"/>
                            <div>long-time</div>
                        </label>
                        <label className={styles["btn"]}>
                            <input type="radio" name="time"/>
                            <div>short-time</div>
                        </label>
                        <label className={styles["btn"]}>
                            <input type="radio" name="time"/>
                            <div>I don't care</div>
                        </label>
                    </form>
                    <form className={styles["btn-box"]}>
                        <label className={styles["btn"]}>
                            <input type="radio" name="stack"/>
                            <div>Front-end</div>
                        </label>
                        <label className={styles["btn"]}>
                            <input type="radio" name="stack"/>
                            <div>Back-end</div>
                        </label>
                        <label className={styles["btn"]}>
                            <input type="radio" name="stack"/>
                            <div>Designer</div>
                        </label>
                    </form>
                    <form className={styles["btn-box"]}>
                        <label className={styles["btn"]}>
                            <input type="radio" name="module"/>
                            <div>Webpage</div>
                        </label>
                        <label className={styles["btn"]}>
                            <input type="radio" name="module"/>
                            <div>App</div>
                        </label>
                        <label className={styles["btn"]}>
                            <input type="radio" name="module"/>
                            <div>Game</div>
                        </label>
                    </form>
                    <input type="button" value={"Start Matching"} />
                </div>
            </div>
        </div>
        </>
    );
}
