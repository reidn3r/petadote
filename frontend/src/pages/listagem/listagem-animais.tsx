import { Search } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";
import { Animal } from "../../models/animal";
import AnimalCard from "./animal-card";
import { mockedAnimais } from "./mockAnimais";
import axios from "axios";
import { baseURL } from "../../config";
import { resolvePath } from "react-router-dom";

const ListagemAnimais = () => {
  const [busca, setBusca] = useState<string>("");
  const [animais, setAnimais] = useState<Animal[]>([]);
  const [modalClosed, setModalClosed] = useState<boolean>(true);

  const animaisFiltrados =
    busca !== ""
      ? animais.filter((animal) =>
          animal.nome.toLocaleLowerCase().includes(busca.toLocaleLowerCase())
        )
      : animais;

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setBusca(input);
  };

  const handleChangeModalClosed = () => {
    setModalClosed(!modalClosed);
  };

  useEffect(() => {
    const getAnimais = async () => {
      const response = await axios.get(`${baseURL}api/get/all`);
      setAnimais(response.data);
    };
    getAnimais();
  }, [modalClosed]);

  return (
    <div>
      <div className="p-10">
        <h1 className="font-fredoka font-semibold text-3xl">
          Lista de animais
        </h1>
      </div>
      <div className="px-28">
        <div className="relative mb-20">
          <input
            type="text"
            placeholder="Buscar"
            className="w-full border-black border-[1px] rounded-[20px] h-10 pl-4"
            onChange={handleChangeInput}
          />
          <Search className="absolute end-6 bottom-2" />
        </div>
        <div className="grid grid-cols-3 gap-5">
          {animaisFiltrados.map((animal, index) => (
            <AnimalCard
              animal={animal}
              index={index}
              key={animal.id}
              handleChangeModalClosed={handleChangeModalClosed}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListagemAnimais;
