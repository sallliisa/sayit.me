import Link from "next/link"
import Button from "../components/Button"
import { useRouter } from "next/router"

const Home = () => {
    const router = useRouter()
    return (
        <>  
            <main className="flex flex-col gap-8 items-center justify-center w-full max-w-xl">
                <h1 className="text-6xl font-bold">sayit.me</h1>
                <p>Get anonymous messages from everyone!</p>
                <div className="flex flex-row gap-4 items-center justify-center w-full max-w-xl">
                    <div><Button action={() => {router.push("/create")}}>Create your Say It!</Button></div>
                    <div><Button action={() => {router.push("/view")}}>View your Say It!</Button></div>
                </div>
                <div className="flex flex-row gap-4 items-center justify-center w-full max-w-xl">
                    <Link href="/privacypolicy"><p className='underline text-blue-500'>Privacy policy</p></Link>
                    <p>•</p>
                    <Link href="/learnmore"><p className='underline text-blue-500'>Learn more</p></Link>
                </div>
            </main>
        </>
    )
}

export default Home
