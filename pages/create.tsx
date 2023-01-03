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
    const [copyState, setCopyState] = useState("")
    const [helpState, setHelpState] = useState(false)
    return (
        <main className='flex flex-col gap-8 items-center justify-center w-full max-w-xl'>
            <div className='flex flex-col gap-2 items-center justify-center'>
                <h2 className='text-2xl font-bold'>Create your own Say It!</h2>
            </div>
            <div className='flex flex-col gap-4 items-center justify-center w-full max-w-xl'>
                {helpState &&
                    <div className="flex flex-col gap-8 items-center justify-center">
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <p className='text-gray-500 text-center'>Say It! is a simple way to send messages anonymously to your friends.</p>
                            <p className='text-gray-500 text-center'>Create a Say It by entering a username and a key</p>
                            <p className='text-gray-500 text-center'>Share your Say It link to your friends to let them say something to you!</p>
                            <p className='text-gray-500 text-center'>You can then view what your friends sent you using your username and key</p>
                            <p className="text-center font-bold text-red-500">Be sure to save your Say It link and key!</p>
                            <p className="text-center font-bold text-red-500">Losing your link means losing access to your Say It page, and there's no way of retrieving it back!</p>
                        </div>
                        <Button action={() => setHelpState(!helpState)}>Ok!</Button>
                    </div>
                }
                {!helpState && 
                <>
                    <button onClick={() => setHelpState(!helpState)}><p className='underline'>What's this?</p></button>
                    <div className="flex flex-row gap-2 items-center justify-center w-full max-w-xl">
                        <h1 className="text-xl font-bold text-gray-500">@</h1>
                        <input value={name} onChange={(e) => {setName(e.target.value)}} className='bg-neutral-700 focus:border-gray-500 focus:border focus:outline-0 w-full h-12 rounded-xl p-4' placeholder='Username'></input>
                        <input value={key} onChange={(e) => {setKey(e.target.value)}} className='bg-neutral-700 focus:border-gray-500 focus:border focus:outline-0 w-full h-12 rounded-xl p-4' placeholder='Key'></input>
                    </div>
                    {code != "" ? (
                        <>
                            <div className="flex flex-col gap-5 items-center justify-center p-4 rounded-lg border-2 border-indigo-500">
                                <p className="text-center">Share this code with your friends to let them say something to you!</p>
                                <div className="flex flex-col gap-4 items-center justify-center">
                                    <div className="grid grid-cols-6 place-items-center w-full max-w-sm">
                                        <p className="col-span-1 text-green-500 font-bold">Link: </p>
                                        <p className='col-span-4 text-gray-500 break-all text-center'>{`https://sayit-me.vercel.app/63b404897c8543e835075730`}</p>
                                        <button onClick={() => {navigator.clipboard.writeText(code).then(() => {
                                            setCopyState("link")
                                        })}}><IconClipboard size={20} className="col-span-1 text-gray-500 hover:text-indigo-600"/></button>
                                    </div>
                                </div>
                                {copyState == "" ? (
                                    <div className="flex flex-col">
                                        <p className="text-center font-bold text-red-500">Be sure to save your Say It link and key!</p>
                                        <p className="text-center font-bold text-red-500">You'll need to to access your Say It page!</p>
                                    </div>
                                ) : (
                                    copyState == "code" ? (
                                        <p className="text-center font-bold text-green-500">Copied code to clipboard!</p>
                                    ) : (
                                        <p className="text-center font-bold text-green-500">Copied link to clipboard!</p>
                                    )
                                )}
                            </div>
                        </>
                        ) : (
                            <Button disabled={name == '' || key == ''} action={() => {
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