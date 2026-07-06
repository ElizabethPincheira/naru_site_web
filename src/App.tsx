import './App.css'
import { AppRouter } from './router/AppRouter'

//App es el administrador del sitio web, aqui se construye toda la aplicacion a mostrar en el div con id root de index.html
function App() {

  return (
    //6 - el navegador ejecuta esta linea y busca el componente App.tsx para mostrarlo en el div con id root -- aqui se construye toda la applicacion a mostrar
    //<h1>Nuevo Sitio web con Zustand de Eli</h1>,
// revisa el archivo AppRouter.tsx para ver que paginas se muestran en la aplicacion
    <AppRouter />

  )
}

export default App
