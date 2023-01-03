import Link from "next/link"
import { useRouter } from "next/router"
import Button from "../components/Button"

const PrivacyPolicy = () => {
    const router = useRouter()
    return (
        <>  
            <main className="flex flex-col gap-8 items-center justify-center w-full max-w-xl">
                <div className='flex flex-col gap-2 items-center justify-center'>
                    <h2 className='text-2xl font-bold'>Privacy Policy</h2>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-center text-gray-500">
                        Say hello to sayit.me! The public anonymous messaging service. This service
                        is provided by me and myself only. I am not affiliated with any other company
                        nor am I planning to.
                    </p>
                    <p className="text-center text-gray-500">
                        sayit.me does not collect any more information than what is provided by you, the user.
                        That is, the username(s), key(s), and message(s) that you, the user, provides.
                    </p>
                    <p className="text-center text-gray-500">
                        sayit.me does not sell or share your information with third parties, or anyone else.
                        The information that you provided is only used to provide the service that you requested.
                    </p>
                </div>
                <Button action={() => {router.back()}}>Ok!</Button>
            </main>
        </>
    )
}

export default PrivacyPolicy
