const MessageBox = ({children}: any) => {
    return (
        <div className='flex flex-col w-full max-w-xl min-h-2xl justify-center rounded-xl bg-gray-800 p-4'>{children}</div>
    )
}

export default MessageBox