import Button from "../components/Button";
import { useState } from "react";
import { getCode } from "../services";
import { useRouter } from "next/router";
import { IconLink, IconClipboard } from "@tabler/icons";

const Create = () => {
    const router = useRouter();
    const [code, setCode] = useState("")
    const [name, setName] = useState("")
    const [key, setKey] = useState("")
    const [helpState, setHelpState] = useState(false)
    return (
        <main className='flex flex-col gap-8 items-center justify-center w-full max-w-xl'>
            <div className='flex flex-col gap-2 items-center justify-center'>
                <h2 className='text-2xl font-bold'>Create your own Say It!</h2>
            </div>
            <div className='flex flex-col gap-4 items-center justify-center w-full max-w-xl'>
                {helpState &&
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <p className='text-gray-500 text-center'>Say It! is a simple way to send messages anonymously to your friends.</p>
                        <p className='text-gray-500 text-center'>Create a Say It by entering a username and a key</p>
                        <p className='text-gray-500 text-center'>Share your Say It ID to your friends to let them say something to you!</p>
                        <p className='text-gray-500 text-center'>You can then view what your friends sent you using your username and key</p>
                        <p className="text-center font-bold text-red-500">Be sure to save your Say It ID and key!</p>
                        <p className="text-center font-bold text-red-500">Losing your ID means losing access to your Say It ID and key!</p>
                        <p className="text-center font-bold text-red-500">There's no way of retrieving it back!</p>
                        <button onClick={() => setHelpState(!helpState)}><p className='underline'>Ok!</p></button>
                    </div>
                }
                {!helpState && 
                <>
                    <button onClick={() => setHelpState(!helpState)}><p className='underline'>What's this?</p></button>
                    <div className="flex flex-row gap-2 items-center justify-center w-full max-w-xl">
                        <h1 className="text-xl font-bold">@</h1>
                        <input value={name} onChange={(e) => {setName(e.target.value)}} className='w-full h-12 rounded-xl p-4' placeholder='Username'></input>
                        <input value={key} onChange={(e) => {setKey(e.target.value)}} className='w-full h-12 rounded-xl p-4' placeholder='Key'></input>
                    </div>

                    {code != "" ? (
                        <>
                        <div className="flex flex-col gap-5 items-center justify-center p-4 rounded-lg border-4 border-blue-500">
                            <p className="text-center">Share this code with your friends to let them say something to you!</p>
                            <div className="flex flex-col items-center justify-center">
                                <p className='text-gray-500'>Your code is: </p>
                                <button onClick={() => {navigator.clipboard.writeText(code)}}><p className='text-gray-500'>{code}</p></button>
                            </div>
                            <div className="flex flex-col gap-4">
                                <Button action={() => {navigator.clipboard.writeText(code)}}>Copy code<IconClipboard/></Button>
                                <Button action={() => {navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_PROTO}://${process.env.NEXT_PUBLIC_VERCEL_URL}/${code}`)}}>Copy link<IconLink/></Button>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-center font-bold text-red-500">Be sure to save your Say It ID and key!</p>
                                <p className="text-center font-bold text-red-500">You'll need to to access your Say It page!</p>
                            </div>
                        </div>
                        </>
                        ) : (
                            <Button action={() => {
                                code == "" ? (
                                    getCode(name, key).then((c) => {
                                        setCode(c)
                                    })
                                ) : (
                                    router.push(`/view/${code}`)
                                )
                            }}>Create</Button>
                        )
                    }
                </>
                }
            </div>
        </main>
    )
}

export default Create