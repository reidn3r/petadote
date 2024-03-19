export enum AnimalTipo {
  Cachorro = "Cachorro",
  Gato = "Gato",
  Hamster = "Hamster",
  Pássaro = "Pássaro",
  Coelho = "Coelho",
}

export enum AnimalSexo {
  Macho = "Macho",
  Fêmea = "Fêmea",
}

export interface Animal {
  id: number;
  tipo: AnimalTipo;
  nome: string;
  idade: number;
  cor: string;
  sexo: AnimalSexo;
  raca: string;
  descricao: string;
}
