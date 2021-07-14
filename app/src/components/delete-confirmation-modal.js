import Button from "./button";
import Separator from "./separator";
import { useToast } from "./toast";

const DeleteConfirmationModal = ({ brand, onCancel, onSuccess }) => {
  const { notify } = useToast();

  const deleteBrand = () => {
    fetch(`http://localhost:8000/brands/${brand.id}`, {
      method: "DELETE",
    }).then(() => {
      notify({
        intent: "success",
        message: `Marca ${brand.name} excluida com sucesso!`,
      });
      onSuccess();
    });
  };
  return (
    <>
      <h3>{brand.name}</h3>
      <p>Tem certeza que deseja excluir {brand.name}?</p>
      <Separator />
      <div style={{ display: "flex" }}>
        <Button variant="outline" onClick={() => onCancel()}>
          Cancelar
        </Button>
        <Separator />
        <Button
          intent="danger"
          onClick={() => {
            deleteBrand();
          }}
        >
          Excluir
        </Button>
      </div>
    </>
  );
};

export default DeleteConfirmationModal;
