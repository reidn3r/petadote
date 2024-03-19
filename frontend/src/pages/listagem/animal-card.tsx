import {
  Bird,
  Cat,
  Dog,
  PawPrint,
  Pencil,
  Rabbit,
  Rat,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import { Animal, AnimalTipo } from "../../models/animal";
import ModalDados from "../edicao/modal-dados";
import ModalEdicao from "../edicao/modal-edicao";
import ModalExclusao from "../exclusao/modal-exclusao";

interface AnimalCardProps {
  animal: Animal;
  index: number;
  handleChangeModalClosed: () => void;
}
interface AnimalIconProps {
  tipo: AnimalTipo;
  className?: string;
}

function AnimalIcon({ tipo, className }: AnimalIconProps) {
  switch (tipo) {
    case AnimalTipo.Cachorro:
      return <Dog className={className} />;
    case AnimalTipo.Coelho:
      return <Rabbit className={className} />;
    case AnimalTipo.Gato:
      return <Cat className={className} />;
    case AnimalTipo.Hamster:
      return <Rat className={className} />;
    case AnimalTipo.Pássaro:
      return <Bird className={className} />;
    default:
      return <PawPrint className={className} />;
  }
}

function AnimalCard({
  animal,
  index,
  handleChangeModalClosed,
}: AnimalCardProps) {
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [openDados, setOpenDados] = useState<boolean>(false);

  const handleOpenEdit = () => {
    setOpenEdit(!openEdit);
    handleChangeModalClosed();
  };
  const handleOpenDelete = () => {
    setOpenDelete(!openDelete);
    handleChangeModalClosed();
  };
  const handleOpenDados = () => {
    setOpenDados(!openDados);
    handleChangeModalClosed();
  };

  return (
    <div
      className={`h-40 w-80 p-4 relative flex flex-col gap-3 ${
        index % 2 == 0 ? "bg-indigo-200" : "bg-blue-200"
      } rounded-[20px]`}
    >
      <div className="absolute end-3 top-4 flex gap-2">
        <Trash2 className="hover:cursor-pointer" onClick={handleOpenDelete} />
        <Pencil className="hover:cursor-pointer" onClick={handleOpenEdit} />
      </div>
      <b
        className="font-poppins text-xl hover:cursor-pointer hover:underline"
        onClick={handleOpenDados}
      >
        {animal?.nome}
      </b>
      <div className="flex">
        <li className="font-poppins text-lg w-1/2">{animal.cor}</li>
        <li className="font-poppins text-lg w-1/2">{animal.sexo}</li>
      </div>
      <li className="font-poppins text-lg list-inside">
        {animal.idade} {animal.idade > 1 ? "anos" : "ano"}
      </li>
      <AnimalIcon tipo={animal.tipo} className="absolute bottom-2 end-3" />
      <ModalEdicao open={openEdit} handler={handleOpenEdit} animal={animal} />
      <ModalExclusao
        open={openDelete}
        handler={handleOpenDelete}
        animal={animal}
      />
      <ModalDados open={openDados} handler={handleOpenDados} animal={animal} />
    </div>
  );
}

export default AnimalCard;
