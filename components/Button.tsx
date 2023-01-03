interface ButtonProps {
    children: React.ReactNode;
    action?: () => void;
    disabled?: boolean;
}

const Button = (props: ButtonProps) => {
    const {children, action, disabled=false} = props
    console.log(disabled)
    return (
        <button disabled={disabled} onClick={disabled ? () => {} : (action)} className={`text-white font-bold py-2 px-4 rounded-md min-w-full ${disabled ? `bg-slate-200 hover:bg-slate-200 cursor-not-allowed` : `bg-blue-500 hover:bg-blue-700`}`}>
            <div className="flex flex-row gap-2 items-center justify-center">
                {children}
            </div>
        </button>
    )
}

export default Button