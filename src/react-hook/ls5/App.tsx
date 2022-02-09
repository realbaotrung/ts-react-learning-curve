import {useEffect, useState} from 'react';
import FriendStatusFunc from './FriendStatusFunc';
import './style.scss';

export default function App(): JSX.Element {
  const [isUnMount, setIsUnMount] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [friendId, setFriendId] = useState<number>(0);

  useEffect(() => {
    if (isUnMount) {
      setIsLogin(false);
      setFriendId(0);
      setCount(0);
    }
    document.title = `You have click ${count} times`;
  }, [isUnMount, count]);

  const handleLogin = (): void => {
    if (!isUnMount) {
      setIsLogin(!isLogin);
    }
  };

  const handleCount = (): void => {
    if (!isUnMount && friendId) {
      setCount(count + 1);
    }
  };

  const handleFriendId = (): void => {
    if (!isUnMount) {
      setFriendId(friendId + 10);
    }
  };

  const handleMount = (): void => {
    setIsUnMount(!isUnMount);
  };

  const showStartBtn = (): JSX.Element | null => {
    const classBtn = 'start font-white';
    if (isUnMount) {
      return null;
    }
    return (
      <button type="button" onClick={handleFriendId} className={classBtn}>
        Start
      </button>
    );
  };

  const showFriendStatus = (): JSX.Element | null => {
    if (isUnMount) return null;
    return (
      <div>
        <FriendStatusFunc friendId={friendId} isLogin={isLogin} />
      </div>
    );
  };

  return (
    <div>
      {showFriendStatus()}
      <button type="button" onClick={handleLogin}>
        {isLogin && friendId ? 'Logout' : 'Login'}
      </button>
      <button type="button" onClick={handleCount}>
        Count
      </button>
      <button type="button" onClick={handleMount}>
        {isUnMount ? 'Add' : 'Delete'}
      </button>
      {showStartBtn()}
    </div>
  );
}
