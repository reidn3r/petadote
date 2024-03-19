import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import axios from "axios";
import Checkbox from "../../components/checkbox";
import { baseURL } from "../../config";
import { Animal } from "../../models/animal";
import { Doador } from "../../models/doador";
import Confirmacao from "../cadastro/confirmacao";

interface ModalDadosProps {
  open: boolean;
  handler: () => void;
  animal?: Partial<Animal>;
  doador?: Partial<Doador>;
}

function ModalDados({ open, handler, animal, doador }: ModalDadosProps) {
  const submitForm = async () => {
    await axios.put(`${baseURL}api/adopt`, { id: animal?.id });
    handler();
  };

  return (
    <Dialog className="bg-blue-200" open={open} handler={handler}>
      <DialogHeader className="font-fredoka">Dados do animal</DialogHeader>
      <DialogBody className="text-black">
        <Confirmacao animal={animal} doador={doador} />
      </DialogBody>
      <DialogFooter className="justify-start text-black font-poppins">
        <Checkbox
          label="Marcar animal como adotado"
          nome="adotado"
          onChange={submitForm}
        />
      </DialogFooter>
    </Dialog>
  );
}

export default ModalDados;
