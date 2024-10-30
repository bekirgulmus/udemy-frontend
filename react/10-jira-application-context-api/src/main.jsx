import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import { Provider } from "./context/task.jsx";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Provider>
    <App />
  </Provider>
)
