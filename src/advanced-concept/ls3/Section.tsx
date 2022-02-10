type Props = {
  children: React.ReactNode;
};
export default function Section(props: Props): JSX.Element {
  const {children} = props;
  return <section>{children}</section>;
}
