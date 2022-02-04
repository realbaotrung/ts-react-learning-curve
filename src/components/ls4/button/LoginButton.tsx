import {ReactElement} from 'react';

type Props = {
  onClick: () => void;
};

export default function LoginButton(props: Props): ReactElement {
  const {onClick} = props;
  return (
    <button type="button" onClick={onClick}>
      Login
    </button>
  );
}
