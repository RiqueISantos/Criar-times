import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Form from "./components/Form/Form";
import Times from "./components/Times/Times";

function App() {

  const newCollaboratorAdd = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  }

  const [collaborators, setCollaborators] = useState([]);

  const times = [
    {
      name: "Programação",
      primaryColor: "#57C278 ",
      secondaryColor: "#D9F7E9 "
    },

    {
      name: "Front-End",
      primaryColor: "#82CFFA ",
      secondaryColor: "#E8F8FF "
    },

    {
      name: "Data Science",
      primaryColor: "#A6D157 ",
      secondaryColor: "#F0F8E2 "
    },

    {
      name: "Devops",
      primaryColor: " #E06B69",
      secondaryColor: "#FDE7E8 "
    },

    {
      name: "UX e Design",
      primaryColor: " #DB6EBF",
      secondaryColor: "#FAE9F5 "
    },

    {
      name: "Mobile",
      primaryColor: "#FFBA05 ",
      secondaryColor: " #FFF5D9"
    },

    {
      name: "Inovação e Gestão",
      primaryColor: " #FF8A29",
      secondaryColor: " #FFEEDF"
    }
  ]


  return (
    <div className="App">
      <Banner />
      <Form
        times={times.map(time => time.name)}
        registeredCollaborator={collaborator => newCollaboratorAdd(collaborator)}
      />

      {
        times.map(time =>
          <Times
            key={time.name}
            name={time.name}
            primaryColor={time.primaryColor}
            secondaryColor={time.secondaryColor}
            collaborators={collaborators.filter(collaborator => collaborator.time === time.name)}
          />)
      }

    </div>
  );
}

export default App;
