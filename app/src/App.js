import React from "react";
import Button from "./components/button";
import Input from "./components/input";
import Modal from "./components/modal";
import Select from "./components/select";
import Separator from "./components/separator";
import Table from "./components/table";
import ToastProvider from "./components/toast";
import { useToast } from "./components/toast";

function App() {
  return (
    <ToastProvider timeout={15000}>
      <Home />
    </ToastProvider>
  );
}

export default App;

const Container = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};

const Home = () => {
  const [name, setName] = React.useState("");
  const [visible, setVisible] = React.useState(false);
  const [selectedBrand, setSelectedBrand] = React.useState(2);
  const [people, setPeople] = React.useState([
    { id: 1, name: "Rafael", age: 31 },
    { id: 2, name: "Henrique", age: 29 },
    { id: 3, name: "Juan", age: 28 },
    { id: 4, name: "Leandro", age: 31 },
    { id: 5, name: "Lioli", age: 50 },
  ]);
  const [deletingPerson, setDeletingPerson] = React.useState();

  const { notify } = useToast();

  //TODO: Get db.json brands
  const brands = [
    { id: 1, name: "Citroen" },
    { id: 2, name: "Volkswagen" },
  ];
  const options = brands.map((brand) => ({
    value: brand.id,
    label: brand.name,
  }));

  const handleDeletePerson = () => {
    setPeople((currentState) =>
      currentState.filter((person) => person.id !== deletingPerson.id)
    );
    setDeletingPerson(null);
    notify({ intent: "success", message: "Usuário removido com sucesso!" });
  };
  return (
    <Container>
      <Button disabled onClick={() => {}}>
        Button
      </Button>
      <Separator />
      <Input
        id="name"
        value={name}
        onChange={(value) => setName(value)}
        placeholder="Enter your name here"
        type="text"
      />
      <Separator />
      <Button
        intent="primary"
        variant="outline"
        onClick={() => {
          setVisible(true);
        }}
      >
        Open Modal
      </Button>
      <Modal
        visible={Boolean(deletingPerson)}
        onRequestClose={() => setDeletingPerson(null)}
      >
        Tem certeza que deseja {deletingPerson?.name}??
        <div>
          <Button onClick={handleDeletePerson}>Sim</Button>
          <Button onClick={() => setDeletingPerson(null)}>Não, Obrigado</Button>
        </div>
      </Modal>
      <Separator />
      <Select
        value={selectedBrand}
        options={options}
        onChange={setSelectedBrand}
      />
      <Table
        columns={[
          { path: "name", label: "Nome" },
          { path: "age", label: "Idade" },
          {
            path: "actions",
            label: "Ações",
            render: ({ rowData, index }) => {
              return (
                <div>
                  <Button>Editar</Button>
                  <Button onClick={() => setDeletingPerson(rowData)}>
                    Excluir
                  </Button>
                </div>
              );
            },
          },
        ]}
        data={people}
      />
    </Container>
  );
};
