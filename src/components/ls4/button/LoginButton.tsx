type Props = {
  onClick: () => void;
};

export default function LoginButton(props: Props): JSX.Element {
  const {onClick} = props;
  return (
    <button type="button" onClick={onClick}>
      Login
    </button>
  );
}
