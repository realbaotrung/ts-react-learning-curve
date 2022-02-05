type Props = {
  onClick: () => void;
};

export default function LogoutButton(props: Props): JSX.Element {
  const {onClick} = props;
  return (
    <button type="button" onClick={onClick}>
      Logout
    </button>
  );
}
