interface User {
  imageUrl: string;
  name: string;
  email: string;
}

export function User(props: User) {
  return (
    <section className="flex flex-col items-center pt-14 text-center w-full col-span-12 md:col-span-6">
      <img
        src={props.imageUrl}
        className="rounded-full h-[12rem] object-contain "
      />
      <p className="text-white pt-5 text-2xl text-bold">{props.name}</p>
      <p className="text-white text-sm">{props.email}</p>
    </section>
  );
}
