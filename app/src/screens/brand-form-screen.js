import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from "../components/button";
import Container from "../components/container";
import Input from "../components/input";
import Separator from "../components/separator";
import { useToast } from "../components/toast";
import useForm from "../hooks/use-form";
import getBrandByIdService from "../services/get-brand-by-id-service";
import saveBrandService from "../services/save-brand-service";

const BrandFormScreen = () => {
  const { notify } = useToast();
  const { goBack } = useHistory();
  const { id } = useParams();

  const { getValue, setValue, submit } = useForm({
    initialValues: {},
    onSubmit: ({ brand }) => {
      const { id, name } = brand;
      const message = id
        ? `Marca ${name} editada com sucesso!`
        : `Marca ${name} adicionada com sucesso!`;

      saveBrandService({ id, name }).then(() => {
        notify({
          intent: "success",
          message,
        });
        goBack();
      });
    },
  });

  React.useEffect(() => {
    if (id) {
      getBrandByIdService({ id }).then((data) => {
        setValue("brand", data)
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
          submit();
        }}
      >
        <Input id="id" disabled value={getValue("brand.id")} />
        <Separator />
        <label htmlFor="name">
          <b>nome:</b>
        </label>
        <Separator />
        <Input
          id="name"
          value={getValue("brand.name")} //form.brand.name // form['brand']['name']
          onChange={(value) => setValue("brand.name", value)}
          required
        />
        <Separator />
        <Button>Salvar</Button>
      </form>
    </Container>
  );
};

export default BrandFormScreen;
