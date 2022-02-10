import ThemedButton from './themed-button';

type Props = {
  changeTheme: () => void;
};
export default function Toolbar(props: Props): JSX.Element {
  const {changeTheme} = props;
  return <ThemedButton onClick={changeTheme}>Change Theme</ThemedButton>;
}
