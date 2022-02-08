import {useState} from 'react';
import FriendStatus from './FriendStatus';

export default function App(): JSX.Element {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isUnMount, setIsUnMount] = useState<boolean>(false);

  const handleClick = (): void => {
    if (!isUnMount) {
      setIsLogin(!isLogin);
    }
  };
  const handleMount = (): void => {
    setIsUnMount(!isUnMount);
  };
  return (
    <div>
      {isUnMount ? null : <FriendStatus friendId={10} isLogin={isLogin} />}
      <button type="button" onClick={handleClick}>
        {isLogin ? 'Logout' : 'Login'}
      </button>
      <button type="button" onClick={handleMount}>
        Toggle
      </button>
    </div>
  );
}
