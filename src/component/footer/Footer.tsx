import styles from './footer.module.css'
const Footer= ()=> {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.logo}>deV</div>
                <div className={styles.text}>
                    All Rights reserved
                </div>
            </div>
        </>
    )
}
export default Footer