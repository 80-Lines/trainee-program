import React from "react";
import SelectBrand from "../components/select-brand";
const CarrosScreen = () => {
  const [marcaSelecionada, setMarcaSelecionada] = React.useState(null);
  return (
    <div>
      <h1>Carros</h1>
      <SelectBrand
        value={marcaSelecionada?.id}
        onChange={(marca) => setMarcaSelecionada(marca)}
      />
      Marca Selecionada: {marcaSelecionada?.name}
      <br />
      <br />
      <SelectBrand
        // value={marcaSelecionada?.id}
        onChange={() => null}
      />
    </div>
  );
};

export default CarrosScreen;
