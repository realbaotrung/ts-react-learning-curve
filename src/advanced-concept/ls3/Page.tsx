type Props = {
  children: React.ReactNode;
};
export default function Page(props: Props): JSX.Element {
  const {children} = props;
  return <div>{children}</div>;
}
