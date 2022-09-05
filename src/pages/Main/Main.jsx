import { Fragment, useContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { BaseLayout } from "../../components/BaseLayout/BaseLayout";
import { Header } from "../../components/Header/Header";
import { AuthContext } from "../../Contexts/AuthContext";
import { Home } from "../Home/Home";

export function Main({ match }) {
  const { usuario, setUsuario } = useContext(AuthContext);
  const location = useLocation()
  console.log(location.pathname)

  let baseLink = "/in"
  return (
    <BaseLayout>
      <Routes>

        <Route path={'*'} element={<Home />} />
        <Route path={location.pathname+'/perfil'} element={<Header />} />
          
      </Routes>

    </BaseLayout>
  );
}