import { Link, useNavigate, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { User } from "../components/User";
import { useGetSocialUserQuery } from "../graphql/generated";

export function Share() {
  const { slug } = useParams<{ slug: string }>();

  const { data } = useGetSocialUserQuery({
    variables: {
      slug: slug,
    },
  });

  if (data && !data.socialUser) {
    return (
      <div className="bg-gray-700 min-h-screen">
        <Header />
        <div className="flex-1 text-center p-10">
          <Link to="/" className="text-white">
            Usuário não encontrado, clique aqui para voltar para a Home
          </Link>
        </div>
      </div>
    );
  }

  if (!data || !data.socialUser) {
    return (
      <div className="bg-gray-700 min-h-screen">
        <Header />
        <div className="flex-1 text-center p-10">
          <p className="text-white"> Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-700 min-h-screen">
      <Header />
      <div className="grid grid-cols-12">
        <User
          imageUrl={data.socialUser.imageUrl}
          name={data.socialUser.name}
          email={data.socialUser.email}
        />

        <section className="flex flex-col items-center pt-14 mx-14 text-center col-span-12 md:col-span-6">
          {data.socialUser.socialLinks.map((a) => {
            return (
              <a
                href={a.link}
                key={a.id}
                target="_blank"
                className="text-white text-xl p-3 mb-5 rounded-lg w-4/5 border border-green-400 hover:bg-green-400 transition-colors "
              >
                {a.texto}
              </a>
            );
          })}
        </section>
      </div>
    </div>
  );
}
