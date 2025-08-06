import './index.scss'

 export default function Site() {
    return(
        <div className='container-site'>

            <div className='container-tags'>

                <div className='logo'>
                    <img src="/public/assets/images/logo.png" alt="" />
                </div>

                <div className='tags'>
                    <p>Inicio</p>
                    <p>Sobre</p>
                    <p>Como Doar</p>
                    <p>Agendar</p>

                    <button>Quero Doar</button>
                </div>

            </div>

            <div className='agendar-online'>
                <h1>Doe Sangue, <br /> Salve Vidas</h1>
                <h3>Agende sua doação online <br />de forma ràpida e segura.</h3>
                <button>Agendar Doação</button>


            </div>
        </div>
    );
}