import {useEffect, useState} from 'react';
import ChatAPI, {Status} from './ChatAPI';

// setup Chat API here...
const chatApi = new ChatAPI();

type Props = {
  friendId: number;
  isLogin: boolean;
};

export default function FriendStatusFunc(props: Props): JSX.Element {
  const [isOnline, setIsOnline] = useState<boolean | null>(null);
  const {friendId, isLogin} = props;

  // ======================
  // Effect with Cleanup
  // ======================
  useEffect(() => {
    const handleStatusChange = (status: Status): void => {
      setIsOnline(status.isOnline);
    };
    chatApi.subscribeToFriendStatus(friendId, handleStatusChange);

    return () => {
      chatApi.unsubscribeFromFriendStatus();
    };
  }, [friendId]);

  if (isOnline === null) return <p>Loading... (Friend Id = 0)</p>;
  return isOnline && isLogin ? <p>Online FS Func</p> : <p>Offline FS Func</p>;
}
