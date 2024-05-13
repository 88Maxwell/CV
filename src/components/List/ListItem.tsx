type Props = {
  children: React.ReactNode;
};

export function ListItem({ children }: Props) {
  return <li className="font-normal text-base">{children}</li>;
}
