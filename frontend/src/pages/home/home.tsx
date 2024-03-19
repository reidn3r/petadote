import dog from "../../assets/dog.svg";

function Home() {
  return (
    <div className="flex flex-col ml-32 space-y-24">
      <img
        className="absolute bottom-0 right-0"
        src={dog}
        alt="dog and human"
        height="auto"
        width={460}
      />
      <div className="max-w-[785px] space-y-1">
        <div>
          <h1 className="text-[60px] font-semibold font-fredoka">
            Bem-vindo(a) ao PetAdote!
          </h1>
          <h3 className="text-[20px] font-medium italic font-poppins mb-4">
            Conecte animais sem lar e adotantes através de um sistema dinâmico,
            simples e fácil.
          </h3>
        </div>
        <a
          href="/cadastro"
          className="font-poppins font-medium text-[16px] bg-blue-200 py-4 px-8 rounded-[30px] w-80 hover:bg-blue-300 "
        >
          Quero cadastrar um animal
        </a>
      </div>
      <div className="space-y-3">
        <h2 className="font-fredoka font-semibold text-[30px]">
          Por que adotar?
        </h2>
        <div className="flex space-x-3">
          <div className="bg-indigo-200 w-72 min-h-52 p-3 rounded-[20px]">
            <p className="font-poppins text-lg">
              <b>Salve vidas: </b>Adotar um animal de um abrigo pode significar
              salvar uma vida, oferecendo uma segunda chance a um pet sem lar.
            </p>
          </div>
          <div className="bg-blue-200 w-72 min-h-52 p-3 rounded-[20px]">
            <p className="font-poppins text-lg">
              <b>Conscientize:</b> Ao adotar, você contribui para a redução do
              número de animais abandonados e ajuda a conscientizar sobre a
              importância da adoção responsável.
            </p>
          </div>
          <div className="bg-indigo-200 w-72 min-h-52 p-3 rounded-[20px]">
            <p className="font-poppins text-lg">
              <b>Construa laços:</b> Animais adotados demonstram gratidão e
              desenvolvem laços profundos com seus novos donos, trazendo alegria
              e companhia duradouras.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
