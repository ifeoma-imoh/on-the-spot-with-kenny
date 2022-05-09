export default function Button ({children, backgroundColor, border}){
    return(
        <button className={`text-2xl text-brand-100 py-2 px-2 w-56 rounded-md ${backgroundColor && backgroundColor } ${border && border }`}>
            {children}
        </button>
    )
}