import { isConstValueNode } from "graphql";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Links } from "../components/Links";
import { User } from "../components/User";
import { useGetSocialUserQuery } from "../graphql/generated";

export function Share() {
  const { slug } = useParams<{ slug: string }>();

  const { data } = useGetSocialUserQuery({
    variables: {
      slug: slug,
    },
  });

  if (!data || !data.socialUser) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
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
