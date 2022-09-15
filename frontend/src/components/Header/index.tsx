import './styles.css'
import logotipo from '../../assets/img/logo.svg'

function Header() {

    return (

        <header>

            <div className="dsmeta-logo-container">

                <img src={logotipo} alt="DsMeta" /> {/* Fiz o import do logotipo, e no atributo 'src' coloquei uma 
                expressão do React "{}" com o apelido 'logotipo' que dei na hora do import. */}

                <h1>Gerenciamento de Vendas</h1>

                <p>Desenvolvido por <a href="https://github.com/angiealves" target="_blank">Angelo Alves</a></p>

            </div>

        </header>

    )

}

export default Header