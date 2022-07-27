import Botao from "../components/Button";
import { Header } from "../components/Header";
import { useAuth0 } from "@auth0/auth0-react";

export function Home() {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <Header />
      <div className="text-gray-100 bg-gray-900 h-screen flex justify-center items-center flex-col">
        <span className="text-6xl">Social Links</span>
        <span className="text-2xl mb-10">Um link, muitas possibilidades</span>

        <Botao text="Começar Agora" callbackFunction={loginWithRedirect} />
      </div>
    </>
  );
}
