import Collaborator from "../Collaborator/Collaborator";

function Times(props) {

    return (

        props.collaborators.length > 0 && <section className=" w-full p-9 text-center"
            style={{ backgroundColor: props.secondaryColor }}>

            <h3 className=" text-3xl border-b-4 inline-block pb-2 mb-9"
                style={{ borderColor: props.primaryColor }}>{props.name}</h3>

            <div className="flex justify-around flex-wrap mt-8 pb-3">
                {props.collaborators.map(collaborator => <Collaborator backgroundColor={props.primaryColor} key={collaborator.name} name={collaborator.name} office={collaborator.office} image={collaborator.image} />)}
            </div>


        </section>


    )
}

export default Times;
