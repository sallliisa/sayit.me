import Link from "next/link"

const Footer = () => {
    return (
        <footer className='flex flex-col items-center justify-center gap-4'>
            <div className='flex flex-col items-center justify-center'>
            <Link href="/create"><p className='text-indigo-500'>Create your own Say It!</p></Link>
            <p>Or</p>
            <Link href="/view"><p className='text-indigo-500'>View your Say It</p></Link>
            </div>
            <p>sayit.me@2022</p>
        </footer>
    )
}

export default Footer