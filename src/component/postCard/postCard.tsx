import Image from 'next/image'
import styles from './postCard.module.css'
import Link from 'next/link'

const PostCard = () => {
    return (
        <>

            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.imgContainer}>
                        <Image src='https://images.pexels.com/photos/30539611/pexels-photo-30539611/free-photo-of-elegant-floral-arrangement-with-ceramic-decor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' fill />
                    </div>
                    <span className={styles.date}> 01.01.2025</span>
                </div>
                <div className={styles.bottom}>
                    <h1 className={styles.title}>
                        Title
                    </h1>
                    <p className={styles.desc}>
                        Desc
                    </p>
                    <Link href='blog/post' className={styles.link}>Read More</Link>
                </div>
            </div>

        </>
    )
}

export default PostCard