import NotificationButton from "./components/NotificationButton";

function App() {

  return (

    <> {/* O React não suporta 2 tags na mesma function, então tem que 
          colocar um abrir e fechar simbólico */}

      <h1>Olá mundo!</h1>

      <NotificationButton />

      <NotificationButton />

      <NotificationButton />

    </>

  )
}

export default App
