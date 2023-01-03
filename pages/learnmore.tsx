import Link from "next/link"
import { useRouter } from "next/router"
import Button from "../components/Button"

const LearnMore = () => {
    const router = useRouter()
    return (
        <>  
            <main className="flex flex-col gap-8 items-center justify-center w-full max-w-xl">
                <div className='flex flex-col gap-2 items-center justify-center'>
                    <h2 className='text-2xl font-bold'>Learn More about Sayit.me!</h2>
                </div>
                <div className="flex flex-col gap-2 items-center justify-center">
                    <p className='text-gray-500 text-center'>Say It! is a simple way to send messages anonymously to your friends.</p>
                    <p className='text-gray-500 text-center'>Create a Say It by entering a username and a key</p>
                    <p className='text-gray-500 text-center'>Share your Say It link to your friends to let them say something to you!</p>
                    <p className='text-gray-500 text-center'>You can then view what your friends sent you using your username and key</p>
                    <p className="text-center font-bold text-red-500">Be sure to save your Say It link and key!</p>
                    <p className="text-center font-bold text-red-500">Losing your link means losing access to your Say It page, and there's no way of retrieving it back!</p>
                </div>
                <Button action={() => {router.back()}}>Ok!</Button>
            </main>
        </>
    )
}

export default LearnMore
