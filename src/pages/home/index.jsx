import { Link } from 'react-router';
import './index.scss'

 export default function Site() {
    return(
        <div className='container-site'>

            <div className='container-tags'>

                <div className='logo'>
                    <img src="/public/assets/images/LogoDoeVida.png" alt="" />
                </div>

                <div className='barra-pesquisa'>

                    <div className='image-lupa'>
                        
                    <img src="/public/assets/images/lupa.png" alt="lupa" />
                    </div>

                    <div className='pesquisa'>

                    <input type="text" id="nomeInput" placeholder="Pesquisar" />
                    </div>
                </div>

                <div className='tags'>
                    <Link on></Link>


                    <button>Login</button>
                </div>

            </div>

            <div className='agendar-online'>

                <div className='agendar-texto'>

                <h1>Doe Sangue, <br /> Salve Vidas</h1>
                <h3>Agende sua doação online <br />de forma ràpida e segura.</h3>
                <button>Agendar Doação</button>

                </div>

                <img src="/public/assets/images/Sangue.webp" alt="" />
            </div>
        </div>
    );
}