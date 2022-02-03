import {ReactElement} from 'react';

interface IProps {
  onClick: () => void;
}

export default function LoginButton(props: IProps): ReactElement {
  const {onClick} = props;
  return (
    <button type="button" onClick={onClick}>
      Login
    </button>
  );
}
