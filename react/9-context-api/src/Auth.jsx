import { useContext } from "react";
import AuthContext from "./context/auth-context.js";

function Auth() {
  const { status, login} = useContext(AuthContext);

  return (
    <div>
      <h1>Giriş Yaptın mı?</h1>
      {
        status ? (
          <p>Ohooo çoktan.</p>
        ) : (
          <div>
            <p>Hayır</p>
            <button onClick={login}>Giriş Yap.</button>
          </div>
        )
      }
    </div>
  );
}

export default Auth;
