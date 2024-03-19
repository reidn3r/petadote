import { Animal } from "../../models/animal";
import { Doador } from "../../models/doador";

interface ConfirmacaoProps {
  animal?: Partial<Animal>;
  doador?: Partial<Doador>;
}

function Confirmacao({ animal, doador }: ConfirmacaoProps) {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <b className="font-fredoka text-xl font-semibold">Dados do animal</b>
        <div className="grid grid-cols-6">
          <div>
            <b className="font-poppins font-semibold text-base">Nome</b>
            <p className="font-poppins">{animal?.nome || "Não informado"}</p>
          </div>

          <div>
            <b className="font-poppins font-semibold text-base">Raça</b>
            <p className="font-poppins">{animal?.raca || "Não informado"}</p>
          </div>

          <div>
            <b className="font-poppins font-semibold text-base">Cor</b>
            <p className="font-poppins">{animal?.cor || "Não informado"}</p>
          </div>

          <div>
            <b className="font-poppins font-semibold text-base">Sexo</b>
            <p className="font-poppins">{animal?.sexo || "Não informado"}</p>
          </div>

          <div>
            <b className="font-poppins font-semibold text-base">Idade</b>
            <p className="font-poppins">{animal?.idade || "Não informado"}</p>
          </div>

          <div>
            <b className="font-poppins font-semibold text-base">Tipo</b>
            <p className="font-poppins">{animal?.tipo || "Não informado"}</p>
          </div>
        </div>
        <div>
          <b className="font-poppins font-semibold text-base">Descrição</b>
          <p className="font-poppins">{animal?.descricao || "Não informado"}</p>
        </div>
      </div>
      <div>
        <b className="font-fredoka text-xl font-semibold">Outras informações</b>
        <div className="grid grid-cols-4 gap-2">
          <div>
            <b className="font-poppins font-semibold text-base">
              Nome do(a) doador(a)
            </b>
            <p className="font-poppins">{doador?.nome || "Não informado"}</p>
          </div>
          <div>
            <b className="font-poppins font-semibold text-base">CPF</b>
            <p className="font-poppins">{doador?.cpf || "Não informado"}</p>
          </div>
          <div>
            <b className="font-poppins font-semibold text-base">Telefone</b>
            <p className="font-poppins">
              {doador?.telefone || "Não informado"}
            </p>
          </div>
          <div>
            <b className="font-poppins font-semibold text-base">E-mail</b>
            <p className="font-poppins">{doador?.email || "Não informado"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Confirmacao;
