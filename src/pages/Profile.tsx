import { useAuth0 } from "@auth0/auth0-react";
import { Header } from "../components/Header";
import { User } from "../components/User";
import { useGetSocialUserByEmailQuery } from "../graphql/generated";

export function Profile() {
  const { user } = useAuth0();

  const { data } = useGetSocialUserByEmailQuery({
    variables: {
      email: user?.email,
    },
  });

  if (user && data && !data.socialUser) {
    //TODO: Redirecionar para a criação de conta
    const { logout } = useAuth0();
    logout({ returnTo: window.location.origin });
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
