import './App.css'
import AuthContext from "./context/auth-context.js";
import Auth from "./Auth.jsx";
import { useState } from "react";

function App() {
  const [authStatus, setAuthStatus] = useState(false);

  const loginAuth = () => {
    setAuthStatus(true);
  }

  return (
    <AuthContext.Provider value={{status: authStatus, login: loginAuth}}>
      <Auth/>
    </AuthContext.Provider>
  )
}

export default App
