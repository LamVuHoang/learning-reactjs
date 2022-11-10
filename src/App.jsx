import Home from "./Components/Home/index";
import SignIn from "./Components/SignIn/index";
import "./App.css";
import { authContext } from "./Store/auth-context";
import { useContext } from "react";

function App() {
  const ctx = useContext(authContext);
  return <>{ctx.isLoggedIn ? <Home /> : <SignIn />}</>;
}

export default App;
