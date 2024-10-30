import './App.css'
import { Routes, Route } from 'react-router-dom'
import { GeneralForm } from "./components/GeneralForm.jsx";
import { PortalForm } from "./components/PortalForm.jsx";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<GeneralForm/>}/>
        <Route path='/portal' element={<PortalForm/>}/>
      </Routes>
    </div>
  )
}

export default App
