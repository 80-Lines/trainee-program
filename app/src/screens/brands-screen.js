import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/button";
import Container from "../components/container";
import DeleteConfirmationModal from "../components/delete-confirmation-modal";
import Input from "../components/input";
import Modal from "../components/modal";
import Separator from "../components/separator";
import Table from "../components/table";
import useBrands from "../hooks/use-brands";

const BrandsScreen = () => {
  const { brands } = useBrands();
  const [filter, setFilter] = React.useState("");
  const [deletingBrand, setDeletingBrand] = React.useState();

  const onRequestClose = () => {
    setDeletingBrand(undefined);
  };

  const filteredBrands = brands.filter(brand => brand.name.startsWith(filter));

  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Marcas</h1>
        <Link to="/marcas/nova">
          <Button>Adicionar Marca</Button>
        </Link>
      </div>
      <Separator />
      <div>Filtrar por nome</div>
      <Input value={filter} onChange={(value) => setFilter(value)} />
      <Separator />
      <Table
        data={filteredBrands}
        columns={[
          { path: "id", label: "#", width: "5%" },
          { path: "name", label: "Nome", width: "90%" },
          {
            path: "",
            label: "Ações",
            render: ({ rowData }) => (
              <div style={{ display: "flex" }}>
                <Link to={`/marcas/${rowData.id}`}>
                  <Button size="sm">Editar</Button>
                </Link>
                <Separator size="sm" />
                <Button
                  intent="danger"
                  size="sm"
                  onClick={() => {
                    setDeletingBrand(rowData);
                  }}
                >
                  Excluir
                </Button>
              </div>
            ),
          },
        ]}
      />
      <Modal
        visible={!!deletingBrand}
        onRequestClose={() => {
          onRequestClose();
        }}
      >
        {deletingBrand ? (
          <DeleteConfirmationModal
            brand={deletingBrand}
            onCancel={() => onRequestClose()}
            onSuccess={() => {
              // getBrands();
              onRequestClose();
            }}
          />
        ) : null}
      </Modal>
    </Container>
  );
};

export default BrandsScreen;
