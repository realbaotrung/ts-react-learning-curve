import {ReactElement} from 'react';

interface IProps {
  onClick: () => void;
}

export default function LogoutButton(props: IProps): ReactElement {
  const {onClick} = props;
  return (
    <button type="button" onClick={onClick}>
      Logout
    </button>
  );
}
