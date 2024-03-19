import { IconButton, Step, Stepper } from "@material-tailwind/react/";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { Animal } from "../../models/animal";
import { Doador } from "../../models/doador";
import Confirmacao from "./confirmacao";
import Identificacao from "./identificacao";
import OutrasInformacoes from "./outrasinformacoes";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../config";

function Cadastro() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
  const [animal, setAnimal] = useState<Partial<Animal>>();
  const [doador, setDoador] = useState<Partial<Doador>>();
  const handleChangeAnimal = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    field: string
  ) => {
    setAnimal((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleChangeDoador = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    field: string
  ) => {
    setDoador((prev) => ({ ...prev, [field]: event.target.value }));
  };

  async function submitForm() {
    const formattedAnimal = {
      nome_animal: animal?.nome,
      tipo_animal: animal?.tipo,
      sexo: animal?.sexo,
      raca: animal?.raca,
      cor: animal?.cor,
      idade: animal?.idade,
      descricao: animal?.descricao,
    };
    const formattedDoador = {
      nome_doador: doador?.nome,
      telefone: doador?.telefone,
      cpf: doador?.cpf,
      email: doador?.email,
    };
    const data = { ...formattedAnimal, ...formattedDoador };
    await axios.post(`${baseURL}api/new/animal`, data);

    navigate("/lista");
  }

  function telaAtual() {
    switch (activeStep) {
      case 0:
        return (
          <Identificacao
            handleChangeField={handleChangeAnimal}
            animal={animal}
          />
        );

      case 1:
        return (
          <OutrasInformacoes
            handleChangeField={handleChangeDoador}
            doador={doador}
          />
        );

      case 2:
        return <Confirmacao animal={animal} doador={doador} />;
      default:
        break;
    }
  }

  const handleNext = () => {
    if (!isLastStep) {
      setActiveStep((cur) => cur + 1);
    }
  };
  const handlePrev = () => {
    if (!isFirstStep) {
      setActiveStep((cur) => cur - 1);
    }
  };

  return (
    <div>
      <div className="p-10">
        <h1 className="font-fredoka font-semibold text-3xl">
          Cadastro de animal
        </h1>
      </div>
      <div className="w-full px-8 flex flex-col">
        <Stepper
          className="w-1/2 font-poppins self-center mb-20"
          lineClassName="bg-blue-100 h-2"
          activeLineClassName="bg-indigo-200"
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
        >
          <Step
            className="h-20 w-20 bg-blue-100 text-black text-5xl font-poppins font-normal cursor-pointer"
            activeClassName="bg-indigo-200 text-black"
            completedClassName="bg-indigo-200 text-black"
            onClick={() => setActiveStep(0)}
          >
            1
            <div className="absolute -bottom-10 w-max text-center text-base">
              Identificação
            </div>
          </Step>
          <Step
            className="h-20 w-20 bg-blue-100 text-black text-5xl font-poppins font-normal cursor-pointer"
            activeClassName="bg-indigo-200 text-black"
            completedClassName="bg-indigo-200 text-black"
            onClick={() => setActiveStep(1)}
          >
            2
            <div className="absolute -bottom-10 w-max text-center text-base">
              Outras informações
            </div>
          </Step>
          <Step
            className="h-20 w-20 bg-blue-100 text-black text-5xl font-poppins font-normal cursor-pointer"
            activeClassName="bg-indigo-200 text-black"
            completedClassName="bg-indigo-200 text-black"
            onClick={() => setActiveStep(2)}
          >
            3
            <div className="absolute -bottom-10 w-max text-center text-base">
              Confirmação
            </div>
          </Step>
        </Stepper>
        <div className="bg-blue-100 min-h-96 w-2/3 self-center rounded-[20px] p-10">
          {telaAtual()}
        </div>
        <div className="mt-16 flex justify-between absolute bottom-9 w-[95vw]">
          <IconButton
            className="rounded-full bg-indigo-200 min-w-14 min-h-14"
            onClick={handlePrev}
            disabled={isFirstStep}
          >
            <ChevronLeft className="text-black w-10 h-10" />
          </IconButton>
          <IconButton
            className={`rounded-full ${
              isLastStep ? "bg-lime-200" : "bg-indigo-200"
            } min-w-14 min-h-14`}
            onClick={isLastStep ? submitForm : handleNext}
          >
            {isLastStep ? (
              <Check className="text-black w-10 h-10" />
            ) : (
              <ChevronRight className="text-black w-10 h-10" />
            )}
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
