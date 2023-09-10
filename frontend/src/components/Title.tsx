interface Props {
  title: string;
}

export function Title(props: Props) {
  return <h1 className="text-2xl">{props.title}</h1>;
}
