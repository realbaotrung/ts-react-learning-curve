import {useEffect, useState} from 'react';
import FriendStatusFunc from './FriendStatusFunc';
import FriendStatusClass from './FriendStatusClass';
import './style.scss';

export default function App(): JSX.Element {
  const [isUnMount, setIsUnMount] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  // friend Id should equal 1, otherwise FriendStatus is Loading...
  const [friendId, setFriendId] = useState<number>(0);

  // ======================================
  // Dom update side effect without cleanup
  // ======================================

  useEffect(() => {
    if (isUnMount) {
      setIsLogin(false);
      setFriendId(0);
    }
    /**
     * React Hook useEffect contains a call to 'setIsLogin'.
     * Without a list of dependencies, this can lead to an
     * infinite chain of updates. To fix this, pass
     * [isUnMount] as a second argument to the useEffect Hook
     */
  }, [isUnMount]);

  useEffect(() => {
    if (isUnMount) {
      setCount(0);
    }
    document.title = `You have click ${count} times`;
    /**
     * If you use this optimization, make sure the array
     * includes all values from the component scope
     * (such as props and state) that change over time and
     * that are used by the effect.
     */
  }, [count, isUnMount]);

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
    // Styling...
    const classBtn = 'font-white';
    // Hide or Show
    if (isUnMount) {
      return null;
    }
    return (
      <button
        type="button"
        onClick={handleFriendId}
        className={`${classBtn} start`}>
        Start
      </button>
    );
  };

  const showFriendStatus = (): JSX.Element | null => {
    if (isUnMount) return null;
    return (
      <div>
        <FriendStatusFunc friendId={friendId} isLogin={isLogin} />
        <FriendStatusClass friendId={friendId} isLogin={isLogin} />
      </div>
    );
  };

  return (
    // use this <></> empty tag below when you don't
    // want to create another div tag
    <>
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
    </>
  );
}
