import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//Aqui se cargan los estilos glbales de la aplicacion, como tailwindcss y los estilos origen de la app
import './index.css'
import App from './App.tsx'

//3 - el navegador ejecuta esta linea y busca el div con id root en index.html
//5 - el navegador ejecuta esta linea y construye toda la applicacion a mostrar en el div con id root
createRoot(document.getElementById('root')!).render( //desde .render se construye toda la applicacion a mostrar en el div con id root
  <StrictMode>
    {/* el navegador ejecuta esta linea y busca el componente App.tsx para mostrarlo en el div con id root -- vamos a App.tsx */}
    <App />
  </StrictMode>,
)
