import {useEffect, useState} from 'react';
import FriendStatus from './FriendStatus';

export default function App(): JSX.Element {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isUnMount, setIsUnMount] = useState<boolean>(false);

  // ======================================
  // Dom update side effect without cleanup
  // ======================================
  useEffect(() => {
    if (isUnMount) {
      setIsLogin(false);
    }
    /**
     * React Hook useEffect contains a call to 'setIsLogin'.
     * Without a list of dependencies, this can lead to an
     * infinite chain of updates. To fix this, pass
     * [isUnMount] as a second argument to the useEffect Hook
     */
  }, [isUnMount]);

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
