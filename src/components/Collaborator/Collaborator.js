function Collaborator(props) {

    return (
        <>
            <div className=" w-72 flex flex-col items-center bg-white rounded-2xl mb-8">
                <div className="w-full flex flex-col items-center h-20 rounded-t-lg" style={{ backgroundColor: props.backgroundColor }}>
                    <img src={props.image} alt={props.name} className=" rounded-full w-28 relative top-[40px]"></img>
                </div>

                <div className=" pt-24 pb-7">
                    <h4 className="text-[#6278F7] text-xl font-semibold">{props.name}</h4>
                    <h5 className="text-lg">{props.office}</h5>
                </div>
            </div>
        </>

    )
}

export default Collaborator;
