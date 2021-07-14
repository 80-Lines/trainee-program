import React from "react";
import Container from "../components/container";
import Separator from "../components/separator";
import Input from "../components/input";
import Button from "../components/button";
import { useToast } from "../components/toast";
import { useHistory, useParams } from "react-router-dom";

const BrandFormScreen = () => {
  const [brandId, setBrandId] = React.useState();
  const [brandName, setBrandName] = React.useState("");
  const { notify } = useToast();
  const { goBack } = useHistory();

  const { id } = useParams();

  const saveBrand = () => {
    const url = id
      ? `http://localhost:8000/brands/${id}`
      : "http://localhost:8000/brands";

    const method = id ? "PUT" : "POST";

    const message = id
      ? `Marca ${brandName} editada com sucesso!`
      : `Marca ${brandName} adicionada com sucesso!`;

    fetch(url, {
      headers: { "Content-Type": "application/json" },
      method,
      body: JSON.stringify({ name: brandName }),
    }).then(() => {
      notify({
        intent: "success",
        message,
      });
      setBrandName("");
      goBack();
    });
  };

  React.useEffect(() => {
    if (id) {
      fetch(`http://localhost:8000/brands/${id}`).then((result) => {
        result.json().then((data) => {
          setBrandId(data.id);
          setBrandName(data.name);
        });
      });
    }
  }, [id]);

  return (
    <Container>
      <h1>{id ? "Editar Marca" : "Nova Marca"}</h1>
      <Separator />
      <label htmlFor="id">
        <b>id:</b>
      </label>
      <Separator />
      <form
        style={{ maxWidth: 500 }}
        onSubmit={(event) => {
          event.preventDefault();
          saveBrand();
        }}
      >
        <Input id="id" disabled value={brandId} />
        <Separator />
        <label htmlFor="name">
          <b>nome:</b>
        </label>
        <Separator />
        <Input
          id="name"
          value={brandName}
          onChange={(value) => setBrandName(value)}
          required
        />
        <Separator />
        <Button>Salvar</Button>
      </form>
    </Container>
  );
};

export default BrandFormScreen;
