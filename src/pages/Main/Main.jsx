import { useContext } from "react";
import { BaseLayout } from "../../components/BaseLayout/BaseLayout";
import { AuthContext } from "../../Contexts/AuthContext";

export function Main() {
  const { usuario, setUsuario } = useContext(AuthContext);
  console.log(usuario)
  return(
    <BaseLayout>
      <h1 className="text-4xl"> Seja bem-vindo {usuario.nome}</h1>
    </BaseLayout>
  );
}