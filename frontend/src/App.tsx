import Header from "./components/Header";
import NotificationButton from "./components/NotificationButton";
import SalesCard from "./components/SalesCard";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (

    <>

      {/* O React não suporta 2 tags na mesma function, então tem que 
        colocar um abrir e fechar simbólico, através do 'fragment' */}

      <ToastContainer />

      <Header />

      <main>

        <section id="sales">

          <div className="dsmeta-card-container">
            {/* esta div vai delimitar o tamanho do meu card. Vou colocar
                meus componentes aqui. */}

            <SalesCard />

          </div>

        </section>

      </main>

    </>

  )
}

export default App
