import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Button from '../components/Button'
import MessageBox from '../components/MessageBox'
import { getMessages } from '../services'

type MessagesDataResponse = {
    name: string
    messages: string[]
}

const ViewMessage = () => {
    const router = useRouter();
    const [id, setId] = useState("")
    const [key, setKey] = useState("")
    const [alertMessage, setAlertMessage] = useState("")
    const [dataReady, setDataReady] = useState(false)
    const [data, setData] = useState<MessagesDataResponse>({name: "", messages: []})
    return (
        <main className='flex flex-col gap-8 items-center justify-center w-full max-w-xl'>
            {!dataReady ? (
                <>
                    <div className='flex flex-col gap-2 items-center justify-center'>
                        <h2 className='text-2xl font-bold'>View your Say It!</h2>
                    </div>
                    <div className='flex flex-col gap-4 items-center justify-center w-full max-w-xl'>
                        <input onChange={(e) => {setId(e.target.value)}} className='bg-neutral-700 focus:border-gray-500 focus:border focus:outline-0 w-full h-12 rounded-xl p-4' placeholder='Your Say It ID'/>
                        <input onChange={(e) => {setKey(e.target.value)}} className='bg-neutral-700 focus:border-gray-500 focus:border focus:outline-0 w-full h-12 rounded-xl p-4' placeholder='Key'/>
                        <Button disabled={id == "" || key == ""} action={() => {
                            getMessages(id as string, key as string).then(([status, data]) => {
                                if (status != 200) {
                                    if (status == 404) setAlertMessage("Say It ID not found!")
                                    else if (status == 403) setAlertMessage("Incorrect key!")
                                } else {
                                    setData(data)
                                    setDataReady(true)
                                }
                            })
                        }}>View</Button>
                        {alertMessage != "" && 
                            <p className='text-red-500'>{alertMessage}</p>
                        }
                    </div>
                </>
            ) : (
                <>
                    <div className='flex flex-col gap-2 items-center justify-center'>
                        <h2 className='text-2xl font-bold'>@{data.name}'s Say It</h2>
                    </div>
                    <div className='flex flex-col overflow-auto gap-2 w-full items-center justify-center'>
                        
                        {data.messages.length != 0 ? data.messages.map((message, index) => {
                            return (
                                <MessageBox>
                                    <p className='text-gray-200 text-md'>{message}</p>
                                </MessageBox>
                            )
                        }) : (
                            <p>No messages yet!</p>
                        )}
                    </div>
                </>
            )}
        </main>
    );
};

export default ViewMessage