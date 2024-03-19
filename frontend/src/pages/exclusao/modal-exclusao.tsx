import {
  Dialog,
  DialogBody,
  DialogHeader,
  IconButton,
} from "@material-tailwind/react";
import axios from "axios";
import { Check, X } from "lucide-react";
import { baseURL } from "../../config";
import { Animal } from "../../models/animal";

interface ModalExclusaoProps {
  open: boolean;
  handler: () => void;
  animal?: Partial<Animal>;
}

function ModalExclusao({ open, handler, animal }: ModalExclusaoProps) {
  const submitForm = async () => {
    await axios.delete(`${baseURL}api/delete/animal`, {
      data: { id: animal?.id },
    });
    handler();
  };

  return (
    <Dialog className="bg-blue-200" open={open} handler={handler} size="xs">
      <DialogHeader className="font-poppins justify-center text-black">
        Deseja excluir este animal?
      </DialogHeader>
      <DialogBody className="flex gap-12 justify-center">
        <div className="flex flex-col items-center">
          <IconButton
            className="rounded-full bg-lime-200 min-w-14 min-h-14"
            onClick={submitForm}
          >
            <Check className="text-black w-10 h-10" />
          </IconButton>
          <b className="font-poppins text-black font-semibold">Sim</b>
        </div>
        <div className="flex flex-col items-center">
          <IconButton
            className="rounded-full bg-red-300 min-w-14 min-h-14"
            onClick={handler}
          >
            <X className="text-black w-10 h-10" />
          </IconButton>
          <b className="font-poppins text-black font-semibold">Não</b>
        </div>
      </DialogBody>
    </Dialog>
  );
}

export default ModalExclusao;
