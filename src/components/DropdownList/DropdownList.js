function DropdownList(props) {
    return (
        <>
            <div>
                <label className=" text-lg font-semibold block mb-2">{props.label}</label>
                <select value={props.value} onChange={event => props.changed(event.target.value)}
                    className="w-full py-7 px-4 shadow-md border-none text-2xl">
                    <option value=""></option>
                    {props.times.map(time => <option key={time}>{time}</option>)}

                </select>
            </div>
        </>
    )
}

export default DropdownList;