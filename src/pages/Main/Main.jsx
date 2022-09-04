import { useContext } from "react";
import { Route } from "react-router-dom";
import { BaseLayout } from "../../components/BaseLayout/BaseLayout";
import { Button } from "../../components/Button/Button";
import { AuthContext } from "../../Contexts/AuthContext";
import { Home } from "../Home/Home";

export function Main({ match }) {
  const { usuario, setUsuario } = useContext(AuthContext);
  console.log(usuario)
  return(
    <BaseLayout>
        <Home />
        
    </BaseLayout>
  );
}