function Button(props) {
    return (
        <>
            <button className=" p-7 bg-[#6278f7] rounded-xl text-xl text-white font-semibold mt-16 border-none hover:text-[#95FFD4] duration-300">
                {props.children}
            </button>
        </>
    )
}

export default Button;