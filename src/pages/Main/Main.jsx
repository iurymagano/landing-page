import { useContext, useState } from "react";
import { BaseLayout } from "../../components/BaseLayout/BaseLayout";
import { Button } from "../../components/Button/Button";
import { AuthContext } from "../../Contexts/AuthContext";

export function Main() {
  const { usuario, setUsuario } = useContext(AuthContext);
  const [pegadinha, setPegadinha] = useState(false)
  console.log(usuario)
  return(
    <BaseLayout>
      <h1 className="text-4xl"> Seja bem-vindo {usuario.nome}</h1>
      <div className="flex justify-center items-center">
        {!pegadinha ?
        <Button 
        label="Click aqui"
        className="bg-red-500 px-7 py-4 rounded-md hover:bg-red-800"
        onClick={() => setPegadinha(true)}
        />
        
      :  <div className="text-6xl"> Gayy</div>
      }
      </div>
    </BaseLayout>
  );
}