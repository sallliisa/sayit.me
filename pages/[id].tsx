import type { GetServerSideProps, NextPage } from 'next'
import Button from '../components/Button'
import { useState } from 'react'
import MessageBox from '../components/MessageBox'
import { getName, say } from '../services'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const [name, id] = await getName(context)
  return {
    props: {
      name: name,
      id: id
    }
  }
}

type SendMessageProps = NextPage & {
  name: string
  id: string
}

const SendMessage = (props: SendMessageProps) => {
  const [message, setMessage] = useState("")
  const [sent, setSent] = useState(false)
  if (props.name == "") {
    return (
      <main className='flex flex-col gap-8 items-center justify-center w-full max-w-xl'>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <h2 className='text-2xl font-bold'>User not found</h2>
        </div>
      </main>
    )
  }
  return (
    !sent ? (
    <main className='flex flex-col gap-8 items-center justify-center w-full max-w-xl'>
      <div className='flex flex-col gap-2 items-center justify-center'>
        <h2 className='text-2xl font-bold'>Say it!</h2>
        <p className='text-xl text-gray-500'>to @{props.name}</p>
      </div>
      <div className='flex flex-col gap-4 items-center justify-center w-full max-w-xl'>
        <textarea value={message} onChange={(e) => {setMessage(e.target.value)}} className='resize-none bg-neutral-700 focus:border-gray-500 focus:border focus:outline-0 min-w-full h-48 rounded-xl p-4' placeholder='Type your message here'></textarea>
        <Button disabled={message == ""} action={() => {
          say(props.id, message).then((status) => {
            if (status === 200) setSent(true)
          })
        }}>Send</Button>
      </div>
    </main>) : (
      <main className='flex flex-col gap-8 items-center justify-center w-full max-w-xl'>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <h2 className='text-2xl font-bold'>You said it!</h2>
        </div>
        <div className='flex flex-col gap-4 w-full max-w-xl'>
        <MessageBox>
          <p className='text-gray-500 text-sm'>to <span className='font-bold'>@{props.name}</span></p>
          <p className='text-gray-200 text-xl'>{message}</p>
        </MessageBox>
        <Button action={() => {
          setSent(false)
          setMessage("")
        }}>Ok!</Button>
        </div>
      </main>
    )
  )
}

export default SendMessage
