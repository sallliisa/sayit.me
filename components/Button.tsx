const Button = ({children, action}: any, title: string) => {
    return (
        
            <button onClick={action} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md min-w-full'>
                <div className="flex flex-row gap-2 items-center justify-center">
                    {children}
                </div>
            </button>
    )
}

export default Button