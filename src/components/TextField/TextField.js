function TextField(props) {

    return (
        <>
            <div className=" my-6">
                <label className=" text-lg font-semibold block mb-2">
                    {props.label}
                </label>
                <input value={props.value} onChange={event => props.changed(event.target.value)} required={props.mandatory} placeholder={props.placeholder}
                    className="w-full py-7 px-4 shadow-md border-none text-2xl"></input>
            </div>
        </>
    )
}

export default TextField;