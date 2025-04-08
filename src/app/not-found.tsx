import Link from "next/link"

const NotFound=()=>{
    return (
        <>
            <h2>This page not found</h2>
            <Link href='/'> Return to Home</Link>
        </>
    )
}
export default NotFound