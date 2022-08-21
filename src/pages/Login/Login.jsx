import { Button } from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import imgC from '../../assets/imgPrinc.svg'
import { useState } from "react";

import { Link } from 'react-router-dom'

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cadastro, setCadastro] = useState(false);

  const hanleCadastrar = () => {
    setCadastro(false);
  }

  return (
    <div
      className="bg-zinc-900 w-full h-[100vh] flex">
      <div className="flex w-full py-24">

        <div className="flex-1 border-r-[1px] border-zinc-500 flex justify-center items-center">
          <div className="flex flex-col w-2/5">
            <span className="text-4xl font-bold mb-10 text-zinc-200">{cadastro ? 'Crie sua conta' : 'Entrar com e-mail'}</span>
            <div className="flex flex-col">
              <div className="mb-3">
                <Input
                  label="Email"
                  type="text"
                  placeholder="E-mail"
                />
              </div>
              {cadastro &&
                <div className="mb-3">
                  <Input
                    label="Nome"
                    type="text"
                    placeholder="Nome"
                  />
                </div>
              }
              <Input
                label="Senha"
                type="password"
                placeholder="Senha"
              />

              <div className="w-full flex justify-center mt-6">
                <Link to="/private" >

                  <Button
                    label={`${cadastro ? 'Criar conta' : 'Entrar'}`}
                    default
                  />
                </Link>
              </div>
              {!cadastro &&
                  <div className="w-full flex items-center mt-8">
                    <div className="flex-1 h-[1px] bg-zinc-500 "></div>
                    <span className="mx-4 text-xl text-white">OU</span>
                    <div className="flex-1 h-[1px] bg-zinc-500 "></div>
                  </div>
                  }
                  <div className="w-full flex  flex-col items-center mt-4 gap-4">
                   {!cadastro && <span className="text-xl text-zinc-500">Não possui uma conta?</span> }
                    <Button
                      label={`${cadastro ? 'Voltar' : 'Cadastre sua conta'}`}
                      className="bg-black border-2 hover:bg-transparent  py-3 rounded-3xl px-6"
                      onClick={() => {cadastro ? hanleCadastrar() : setCadastro(true)}}
                    />
                  </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex">
          <div className="flex flex-col w-full justify-center items-center">
            <span className="text-3xl font-bold text-zinc-100">Venha conhecer meu mundo</span>
            <strong className="text-xl mt-4 text-zinc-500">Cadastre-se para ter acesso ao meu portfólio!</strong>
            <img className="w-2/3 mt-6" src={imgC} alt="" />
          </div>

        </div>
      </div>
    </div>

  );
}