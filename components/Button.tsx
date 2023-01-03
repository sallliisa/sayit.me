interface ButtonProps {
    children: React.ReactNode;
    action?: () => void;
    disabled?: boolean;
}

const Button = (props: ButtonProps) => {
    const {children, action, disabled=false} = props
    return (
        <button disabled={disabled} onClick={disabled ? () => {} : (action)} className={`text-white font-bold py-2 px-4 rounded-md min-w-full bg- ${disabled ? `bg-neutral-800 hover:bg-neutral-800 cursor-not-allowed` : `bg-blue-500 hover:bg-blue-700`}`}>
            <div className="flex flex-row gap-2 items-center justify-center">
                {children}
            </div>
        </button>
    )
}

export default Button