import { ChangeEvent } from "react";
import Input from "../../components/input";
import Select from "../../components/select";
import TextArea from "../../components/textarea";
import { Animal, AnimalSexo, AnimalTipo } from "../../models/animal";

const opcoesSexo = [
  { label: "Fêmea", value: AnimalSexo.Fêmea },
  { label: "Macho", value: AnimalSexo.Macho },
];

const opcoesTipoAnimal = [
  { label: "Cachorro", value: AnimalTipo.Cachorro },
  { label: "Coelho", value: AnimalTipo.Coelho },
  { label: "Gato", value: AnimalTipo.Gato },
  { label: "Hamster", value: AnimalTipo.Hamster },
  { label: "Pássaro", value: AnimalTipo.Pássaro },
];

interface IdentificacaoProps {
  handleChangeField: (
    event: ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >,
    field: string
  ) => void;
  animal?: Partial<Animal>;
}

function Identificacao({ handleChangeField, animal }: IdentificacaoProps) {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-3 gap-8">
        <Input
          label="Nome"
          nome="nome"
          value={animal?.nome}
          placeholder="Nome do animal"
          onChange={(event) => handleChangeField(event, "nome")}
        />
        <Input
          label="Raça"
          nome="raca"
          value={animal?.raca || animal?.tipoAnimal?.raca}
          placeholder="Raça do animal"
          onChange={(event) => handleChangeField(event, "raca")}
        />
        <Input
          label="Cor"
          nome="cor"
          value={animal?.cor}
          placeholder="Cor predominante do animal"
          onChange={(event) => handleChangeField(event, "cor")}
        />
        <Select
          label="Sexo"
          nome="sexo"
          value={animal?.sexo}
          placeholder="Sexo do animal"
          opcoes={opcoesSexo}
          onChange={(event) => handleChangeField(event, "sexo")}
        />
        <Input
          label="Idade"
          nome="idade"
          value={animal?.idade}
          placeholder="Idade em anos do animal"
          onChange={(event) => handleChangeField(event, "idade")}
        />
        <Select
          label="Tipo"
          nome="tipo"
          value={animal?.tipo || animal?.tipoAnimal?.tipo}
          placeholder="Ex: Cachorro"
          opcoes={opcoesTipoAnimal}
          onChange={(event) => handleChangeField(event, "tipo")}
        />
      </div>
      <TextArea
        label="Descrição"
        nome="descricao"
        value={animal?.descricao}
        placeholder="Descrição do animal"
        onChange={(event) => handleChangeField(event, "descricao")}
      />
    </div>
  );
}
export default Identificacao;
