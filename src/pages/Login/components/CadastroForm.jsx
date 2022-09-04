import { useState } from "react";
import { Link } from "react-router-dom";
import { Alert } from "../../../components/Alert/Alert";
import { Button } from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";

export const CadastroForm = (props) => {
  const [usuarios, setUsuarios] = useState(props.usuarios);
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState(false);
  const [mensagem, setMensagem] = useState('');
  const [contaCriada, setContaCriada] = useState(false);

  const user = {
    email,
    nome,
    password
  }

  const criarUsuario = () => {
   const emailUsuarioExiste = usuarios.some(user => {
    return user.email == email;
   })
    if(!emailUsuarioExiste) {
      if (email && nome && password) {
        props.hanleCadastrar(user);
        setMensagem('Conta criada com sucesso');
        setContaCriada(true);
      } else {
        setMensagem('Preencha os campos obrigatórios')
      }
      
    } else {
      setMensagem('Conta com email já existente')
    }
    setErro(true);
  }

  return (
    <>
      <span className="text-4xl font-bold mb-10 text-zinc-200">Crie sua conta</span>
      {erro &&
        <Alert
          className="text-white rounded-lg h-12 flex justify-center items-center mb-9"
          label={mensagem}
          sucesso={contaCriada}
          erro={!contaCriada}
        />
      }
      <div className="mb-3">
        <Input
          label="Nome"
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          erro={erro && !nome ? true : false}
        />
      </div>
      <div className="mb-3">
        <Input
          label="Email"
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          erro={erro && !email ? true : false}
        />
      </div>

      <Input
        label="Senha"
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        erro={erro && !password ? true : false}
      />

      <div className="w-full flex justify-center mt-6">
        <Button
          label='Criar conta'
          default
          onClick={() => criarUsuario()}
        />
      </div>
      <div className="w-full flex  flex-col items-center mt-4 gap-4">
        <Link to='/'>
          <Button
            label={'Voltar'}
            className="bg-black border-2 hover:bg-transparent  py-3 rounded-3xl px-6"
            onClick={() => props.setCadastro(false)}
          />
        </Link>
      </div>
    </>
  );
}