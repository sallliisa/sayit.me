import Link from "next/link"

const Footer = () => {
    return (
        <footer className='flex flex-col items-center justify-center gap-4'>
            <div className='flex flex-col items-center justify-center'>
            <Link href="/create"><p className='underline'>Create your own Say It!</p></Link>
            <p className="text-gray-500">Or</p>
            <Link href="/view"><p className='underline'>View your Say It</p></Link>
            </div>
            <p className="text-gray-500">sayit.me@2022</p>
        </footer>
    )
}

export default Footer