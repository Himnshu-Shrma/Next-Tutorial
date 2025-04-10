"use client";

import Link from "next/link"
import styles from "./navbar.module.css"
import { usePathname } from "next/navigation"
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
    const [open, setOpen] = useState<boolean>(false);
    const pathName = usePathname();

    const session: boolean = true;
    const isAdmin: boolean = true;
    return (
        <>
            <nav className={styles.container}>
                <Link href='/' className={styles.logo} >Logo</Link>
                <div className={styles.linkcontainer}>
                    <div className={styles.links}>
                        <Link href='/' className={`${styles.menucontainer} ${pathName === '/' && styles.active}`}>Home</Link>
                        <Link href='/about' className={`${styles.menucontainer} ${pathName === '/about' && styles.active}`}>About</Link>
                        <Link href='/contact' className={`${styles.menucontainer} ${pathName === '/contact' && styles.active}`}>Contact Us</Link>
                        <Link href='/blog' className={`${styles.menucontainer} ${pathName === '/blog' && styles.active}`}>Blog</Link>

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
                    <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>
                        <Image src="/menu.png" alt={""} width={30} height={30}/>
                    </button>
                    {
                        open && (
                            <div className={styles.mobileLinks}>
                                <Link href='/' className={`${styles.menucontainer} ${pathName === '/' && styles.active}`}>Home</Link>
                                <Link href='/about' className={`${styles.menucontainer} ${pathName === '/about' && styles.active}`}>About</Link>
                                <Link href='/contact' className={`${styles.menucontainer} ${pathName === '/contact' && styles.active}`}>Contact Us</Link>
                                <Link href='/blog' className={`${styles.menucontainer} ${pathName === '/blog' && styles.active}`}>Blog</Link>

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
                        )
                    }
                </div>
            </nav>
        </>
    )
}
export default Navbar