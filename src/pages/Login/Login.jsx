import { Button } from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import imgC from '../../assets/imgPrinc.svg'
import { useEffect, useState } from "react";

import { useNavigate } from 'react-router-dom'

import { initializeApp } from 'firebase/app'
import { addDoc, collection, deleteDoc, getDocs, getFirestore } from 'firebase/firestore'
import { CadastroForm } from "./components/CadastroForm";
import { Alert } from "../../components/Alert/Alert";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBX2sHAb9WBqlxGR4dUWy-b4CH8LL5HvXg",
  authDomain: "landing-page-dbebb.firebaseapp.com",
  projectId: "landing-page-dbebb",
  storageBucket: "landing-page-dbebb.appspot.com",
  messagingSenderId: "1057932696632",
  appId: "1:1057932696632:web:329854c8f16ae45fe41acd",
  measurementId: "G-N11E41LYXF"
});


export function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [cadastro, setCadastro] = useState(false);
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioNecontrado, setUsuarioNencontrado] = useState(false);

  const navigate = useNavigate();

  const db = getFirestore(firebaseApp);
  //pegando a tabela do banco de dados
  const usuarioColection = collection(db, 'usuarios')

  useEffect(() => {
    const getUsuarios = async () => {
      const data = await getDocs(usuarioColection);
      const users = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setUsuarios(users);
    }
    getUsuarios();
  }, [])

  function verificaUsuario() {
    console.log('ESTA NA FUNÇÃO VERIFICAR')
    const usuarioVerificado = usuarios.some((usuario) =>
      usuario.email === email && usuario.password === password
    )
    if (usuarioVerificado) {
     props.usuarioLogado(true);
    } else {
      setUsuarioNencontrado(true);
      setMensagem('Verificar Usuario e senha')
    }
  }

  const hanleCadastrar = async (usuario) => {
    const user = await addDoc(usuarioColection, usuario);
    setUsuarios([...usuarios, usuario])
    setCadastro(false);
  }

  const handleDeleteUsuario = async (id) => {
    const userDoc = doc(db, 'usuarios', id)
    await deleteDoc(userDoc);
  }



  return (
    <div
      className="bg-zinc-900 w-full h-[100vh] flex">
      <div className="flex w-full py-24">
        <div className="flex-1 border-r-[1px] border-zinc-500 flex justify-center items-center md:px-6">

          <div className="flex flex-col w-2/5 md:w-full">
            {cadastro == false ?
              <>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold mb-10 text-zinc-200">Entrar com e-mail </span>
                  {usuarioNecontrado &&

                    <Alert
                      className="text-white rounded-lg h-12 flex justify-center items-center mb-9"
                      label={mensagem}
                      erro={true}
                    />
                  }
                  <div className="mb-3">
                    <Input
                      label="Email"
                      type="text"
                      placeholder="E-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <Input
                    label="Senha"
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <div className="w-full flex justify-center mt-6">

                    <Button
                      label='Entrar'
                      default
                      onClick={() => verificaUsuario()}
                    />
                  </div>
                  {!cadastro &&
                    <div className="w-full flex items-center mt-8">
                      <div className="flex-1 h-[1px] bg-zinc-500 "></div>
                      <span className="mx-4 text-xl text-white">OU</span>
                      <div className="flex-1 h-[1px] bg-zinc-500 "></div>
                    </div>
                  }
                  <div className="w-full flex  flex-col items-center mt-4 gap-4">
                    {!cadastro && <span className="text-xl text-zinc-500">Não possui uma conta?</span>}
                    <Button
                      label={'Cadastre sua conta'}
                      className="bg-black border-2 hover:bg-transparent  py-3 rounded-3xl px-6"
                      onClick={() => setCadastro(true)}
                    />
                  </div>
                </div>
              </>
              :
              <CadastroForm
                setCadastro={setCadastro}
                hanleCadastrar={hanleCadastrar}
                usuarios={usuarios}
              />}

          </div>
        </div>

        <div className="flex-1 flex md:hidden">
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