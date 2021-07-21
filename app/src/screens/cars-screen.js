import React from "react";
import Input from "../components/input";
import SelectBrand from "../components/select-brand";
import Table from "../components/table";
import useCars from "../hooks/use-cars";

const CarrosScreen = () => {
  const [marcaSelecionada, setMarcaSelecionada] = React.useState(null);
  const [filterName, setFilterName] = React.useState('');
  const { cars } = useCars();
  const filteredCars = cars.filter(car => car.name.startsWith(filterName));

  return (
    <div>
      <h1>Carros</h1>
      <label>Filtrar por nome</label>
      <Input value={filterName} onChange={(value) => setFilterName(value)} />
      <SelectBrand
        value={marcaSelecionada?.id}
        onChange={(marca) => {
          console.log(marca);
          setMarcaSelecionada(marca);
        }}
      />
      <br />
      <Table
        data={filteredCars}
        columns={[
          { path: "id", label: "#", width: "5%" },
          { path: "name", label: "Nome", width: "90%" },
          { path: "brand.name", label: "Brand", width: "90%" },
        ]}
      />
    </div>
  );
};

export default CarrosScreen;
