interface LinksProp {
  link: string;
  texto: string;
}

export function Links(props: LinksProp[]) {
  console.log(props);
  return (
    <section className="flex flex-col items-center pt-14 text-center w-full">
      {props.length >= 0 &&
        props.map((a) => {
          return (
            <a href={a.link} key={a.link}>
              {a.texto}
            </a>
          );
        })}
    </section>
  );
}
