import {ReactElement} from 'react';

type Props = {
  onClick: () => void;
};

export default function LogoutButton(props: Props): ReactElement {
  const {onClick} = props;
  return (
    <button type="button" onClick={onClick}>
      Logout
    </button>
  );
}
