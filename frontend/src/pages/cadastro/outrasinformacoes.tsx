import { ChangeEvent } from "react";
import Input from "../../components/input";

interface OutrasInformacoesProps {
  handleChangeField: (
    event: ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >,
    field: string
  ) => void;
  doador?: any;
}

function OutrasInformacoes({
  handleChangeField,
  doador,
}: OutrasInformacoesProps) {
  return (
    <div className="flex flex-col gap-8">
      <Input
        label="Nome do(a) doador(a)"
        nome="nome"
        value={doador?.nome}
        placeholder="Nome do(a) doador(a)"
        onChange={(event) => handleChangeField(event, "nome")}
      />
      <div className="grid grid-cols-2 gap-8">
        <Input
          label="CPF"
          nome="cpf"
          value={doador?.cpf}
          placeholder="Ex: 12345678910"
          onChange={(event) => handleChangeField(event, "cpf")}
        />
        <Input
          label="Telefone"
          nome="telefone"
          value={doador?.telefone}
          placeholder="Ex: 44988211661"
          onChange={(event) => handleChangeField(event, "telefone")}
        />
      </div>
      <Input
        label="E-mail"
        nome="email"
        value={doador?.email}
        placeholder="E-mail do(a) doador(a)"
        onChange={(event) => handleChangeField(event, "email")}
      />
    </div>
  );
}
export default OutrasInformacoes;
