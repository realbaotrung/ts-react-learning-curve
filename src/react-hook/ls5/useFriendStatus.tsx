import {useEffect, useState} from 'react';
import ChatAPI, {Status} from './ChatAPI';

// setup Chat Api
const chatApi = new ChatAPI();

/**
 * Custom Hook is a JavaScript function whose name
 * starts with "use" and that may call other Hooks.
 * @param friendId
 * @returns isOnline
 */
export function useFriendStatus(friendId: number): boolean | null {
  const [isOnline, setIsOnline] = useState<boolean | null>(null);

  useEffect(() => {
    const handleStatusChange = (status: Status): void => {
      setIsOnline(status.isOnline);
    };
    chatApi.subscribeToFriendStatus(friendId, handleStatusChange);

    return () => {
      chatApi.unsubscribeFromFriendStatus();
    };
  }, [friendId]);

  return isOnline;
}
