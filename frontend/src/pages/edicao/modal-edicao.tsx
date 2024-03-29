import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
} from "@material-tailwind/react";
import { Check } from "lucide-react";
import { Animal } from "../../models/animal";
import Identificacao from "../cadastro/identificacao";
import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../../config";

interface ModalEdicaoProps {
  open: boolean;
  handler: () => void;
  animal?: Partial<Animal>;
}

function ModalEdicao({ open, handler, animal }: ModalEdicaoProps) {
  const [animalValues, setAnimalValues] = useState<Partial<Animal>>();

  const submitForm = async () => {
    const formattedAnimal = {
      id: animal?.id,
      nome: animalValues?.nome,
      tipo: animalValues?.tipoAnimal?.tipo,
      sexo: animalValues?.sexo,
      raca: animalValues?.tipoAnimal?.raca,
      cor: animalValues?.cor,
      idade: animalValues?.idade,
      descricao: animalValues?.descricao,
    };
    await axios.put(`${baseURL}api/update/animal`, formattedAnimal);
    handler();
  };

  const handleChangeAnimalValues = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    field: string
  ) => {
    setAnimalValues((prev) => ({ ...prev, [field]: event.target.value }));
  };

  useEffect(() => {
    if (open) setAnimalValues(animal);
  }, [open]);

  return (
    <Dialog className="bg-blue-200" open={open} handler={handler}>
      <DialogHeader className="font-fredoka">
        Editar dados do animal
      </DialogHeader>
      <DialogBody className="text-black">
        <Identificacao
          handleChangeField={handleChangeAnimalValues}
          animal={animalValues}
        />
      </DialogBody>
      <DialogFooter>
        <IconButton
          className="rounded-full bg-lime-200 min-w-14 min-h-14"
          onClick={submitForm}
        >
          <Check className="text-black w-10 h-10" />
        </IconButton>
      </DialogFooter>
    </Dialog>
  );
}

export default ModalEdicao;
