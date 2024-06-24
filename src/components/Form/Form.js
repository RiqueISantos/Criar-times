import { useState } from "react";
import Button from "../Button/Button";
import DropdownList from "../DropdownList/DropdownList";
import TextField from "../TextField/TextField";

function Form(props) {

    const [name, setName] = useState("");
    const [office, setOffice] = useState("");
    const [image, setImage] = useState("");
    const [time, setTime] = useState("");

    const save = (event) => {
        event.preventDefault();
        props.registeredCollaborator({
            name,
            office,
            image,
            time
        })

        setName("")
        setOffice("")
        setImage("")
        setTime("")
    }


    return (
        <>
            <section className="flex justify-center my-20">
                <form onSubmit={save} className="w-[80%] bg-[#f6f6f6] py-8 px-24 rounded-[20px] shadow-md shadow-gray-300">

                    <h2 className=" text-3xl text-[#212121] text-center mb-11">
                        Preencha os dados para criar o card do colaborador.
                    </h2>

                    <TextField
                        label="Nome"
                        placeholder="Digite seu nome"
                        mandatory={true}
                        changed={value => setName(value)}
                        value={name}
                    />


                    <TextField
                        label="Cargo"
                        placeholder="Digite seu cargo"
                        mandatory={true}
                        changed={value => setOffice(value)}
                        value={office}
                    />


                    <TextField
                        label="Imagem"
                        placeholder="Informe o endereço da imagem"
                        changed={value => setImage(value)}
                        value={image}
                    />

                    <DropdownList
                        label="Times"
                        times={props.times}
                        mandatory={true}
                        value={time}
                        changed={value => setTime(value)}
                    />

                    <Button>
                        Criar card
                    </Button >
                </form>
            </section>
        </>
    )
}

export default Form;