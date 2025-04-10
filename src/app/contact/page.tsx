import styles from './contact.module.css'
import Image from "next/image"

const ContactPage = ()=>{
    return(
        <>
            <div className={styles.container}>

                <div className={styles.imgContainer}>
                    <Image className={styles.img} src='/contact.png' alt="" fill/>
                </div>
                <div className={styles.formContainer}>
                    <form className={styles.form} action="">
                        <input type="text" placeholder="Name and Surname" />
                        <input type="email" placeholder="Email" />
                        <input type="number" placeholder="Phone Number (Optional)" />
                        <textarea name="" id="" placeholder="Message"></textarea>
                    </form>
                </div>
            </div>

        </>
    )
}
export default ContactPage