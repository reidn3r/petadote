import { Animal, AnimalSexo, AnimalTipo } from "../../models/animal";

export const mockedAnimais: Animal[] = [
  {
    id: 1,
    tipo: AnimalTipo.Cachorro,
    nome: "Pipoca",
    idade: 4,
    cor: "Branco",
    sexo: AnimalSexo.Macho,
    descricao: "descrição",
    raca: "raça"
  },
  {
    id: 2,
    tipo: AnimalTipo.Gato,
    nome: "Mia",
    idade: 2,
    cor: "Cinza",
    sexo: AnimalSexo.Fêmea,descricao: "descrição",
    raca: "raça"
  },
  {
    id: 3,
    tipo: AnimalTipo.Hamster,
    nome: "Bolinha",
    idade: 1,
    cor: "Marrom",
    sexo: AnimalSexo.Fêmea,descricao: "descrição",
    raca: "raça"
  },
  {
    id: 4,
    tipo: AnimalTipo.Pássaro,
    nome: "Tweet",
    idade: 3,
    cor: "Azul",
    sexo: AnimalSexo.Macho,descricao: "descrição",
    raca: "raça"
  },
  {
    id: 5,
    tipo: AnimalTipo.Coelho,
    nome: "Pernalonga",
    idade: 1,
    cor: "Branco",
    sexo: AnimalSexo.Macho,descricao: "descrição",
    raca: "raça"
  },
  {
    id: 6,
    tipo: AnimalTipo.Cachorro,
    nome: "Rex",
    idade: 5,
    cor: "Preto",
    sexo: AnimalSexo.Macho,descricao: "descrição",
    raca: "raça"
  },
];
