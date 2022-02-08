import {useEffect, useState} from 'react';
import ChatAPI, {Status} from './ChatAPI';

type Props = {
  friendId: number;
  isLogin: boolean;
};

const chatApi = new ChatAPI();

export default function FriendStatus(props: Props): JSX.Element {
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

  if (isOnline === null) return <p>Loading...</p>;
  return isOnline && isLogin ? <p>Online</p> : <p>Offline</p>;
}
