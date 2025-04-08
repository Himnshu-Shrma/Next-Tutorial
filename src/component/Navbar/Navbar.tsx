"use client";

import Link from "next/link"
import styles from "./navbar.module.css"
import { usePathname } from "next/navigation"

const Navbar = () => {
    const pathName = usePathname();

    const session = true;
    const isAdmin = true;
    return (
        <>
            <nav className={styles.container}>
                <div className={styles.logo}>Logo</div>
                <div className={styles.links}>
                    <Link href='/' className={`${styles.menucontainer} ${pathName === '/' && styles.active}`}>Home</Link>
                    <Link href='/about' className={`${styles.menucontainer} ${pathName === '/about' && styles.active}`}>About</Link>
                    <Link href='/contact' className={`${styles.menucontainer} ${pathName === '/contact' && styles.active}`}>Contact Us</Link>
                    {
                        session ? (
                            <>
                                {
                                    isAdmin &&
                                    <Link href='/admin' className={`${styles.menucontainer} ${pathName === '/admin' && styles.active}`}>Admin</Link>
                                }
                                <Link href='/logout' className={styles.logout}>Logout</Link>
                            </>

                        )
                            : <Link href='/login'>Login</Link>
                    }


                </div>
            </nav>
        </>
    )
}
export default Navbar