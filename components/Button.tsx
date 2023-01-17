interface ButtonProps {
    children: React.ReactNode;
    action?: () => void;
    disabled?: boolean;
}

const Button = (props: ButtonProps) => {
    const {children, action, disabled=false} = props
    return (
        <button disabled={disabled} onClick={action} className={`text-white font-bold py-2 px-4 rounded-md min-w-full disabled:bg-neutral-800 disabled:hover:bg-neutral-800 disabled:cursor-not-allowed bg-indigo-600 hover:bg-indigo-800`}>
            <div className="flex flex-row gap-2 items-center justify-center">
                {children}
            </div>
        </button>
    )
}

export default Button