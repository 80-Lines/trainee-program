import React from "react";
import Table from "../components/table";
import Separator from "../components/separator";
import Button from "../components/button";
import Container from "../components/container";

const BrandsScreen = () => {
  const [brands, setBrands] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:8000/brands").then((result) => {
      result.json().then((data) => {
        setBrands(data);
      });
    });
  }, []);

  return (
    <Container>
      <h1>Marcas</h1>
      <Separator />
      <Table
        data={brands}
        columns={[
          { path: "id", label: "#", width: "5%" },
          { path: "name", label: "Nome", width: "90%" },
          {
            path: "",
            label: "Ações",
            render: () => (
              <div style={{ display: "flex" }}>
                <Button size="sm">Editar</Button>
                <Separator size="sm" />
                <Button intent="danger" size="sm">
                  Excluir
                </Button>
              </div>
            ),
          },
        ]}
      />
    </Container>
  );
};

export default BrandsScreen;
