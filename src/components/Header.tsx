import { useAuth0 } from "@auth0/auth0-react";
import classNames from "classnames";
import { UserCircle } from "phosphor-react";
import { Link } from "react-router-dom";

export function Header() {
  const { logout, user } = useAuth0();

  const handleSair = function () {
    logout({ returnTo: window.location.origin });
  };

  return (
    <header className="w-full p-5 flex justify-between items-center bg-gray-700 text-gray-100 border-b border-gray-600">
      <Link to="/">Social Links</Link>
      <button
        className={classNames("cursor-pointer", { hidden: !user })}
        onClick={handleSair}
      >
        Sair
      </button>
    </header>
  );
}
