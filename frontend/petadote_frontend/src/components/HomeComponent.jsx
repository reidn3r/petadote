import './HomeComponent.css';
import '../style.css';
import DoogieImage from '../assets/img/DoogieDoodle.png'

function HomeComponent(){
    return (
        <div className='main-container'>
            <div className="title-container">
                <p className="main-title">Bem vindo(a) ao PetAdote</p>
            </div>
            <div className="subtitle-container">
                <p className="main-subtitle">Conecte animais sem lar e adotantes através de um sistema dinâmico, simples e fácil</p>
            </div>

            <div className="btn-container">
                <button className='btn-cadastrar'>Quero cadastrar um animal</button>
                <button className='btn-animais'>Ver animais</button>
            </div>

            <div className="bottom-container">
                <p className="bottom-title">Por que adotar?</p>
                <div className="subcontainer">
                    <div className="container-left">
                        <p className="text-content-left"> <span>Salve Vidas:</span> Adotar um animal de um abrigo pode significar salvar uma vida, oferecendo uma segunda chance a um pet sem lar. </p>
                    </div>
                    <div className="container-mid">
                    <p className="text-content-mid"> <span>Conscientize:</span> Ao adotar, você contribui para a redução do número de animais abandonados e ajuda a conscientizar sobre a importância da adoção responsável.</p>
                    </div>
                    <div className="container-right">
                    <p className="text-content-right"><span>Construa laços:</span> Animais adotados demonstram gratidão e desenvolvem laços profundos com seus novos donos, trazendo alegria e companhia duradouras.</p>
                    </div>
                </div>
            </div>
            <div className="dog-image-container">
                <img src={DoogieImage} alt="cachorro e humano" className='dog-image' />
            </div>
        </div>
    )
}

export default HomeComponent;