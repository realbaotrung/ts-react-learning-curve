import {useFriendStatus} from './useFriendStatus';

// setup Chat API here...

type Props = {
  friendId: number;
  isLogin: boolean;
};

export default function FriendStatusFunc(props: Props): JSX.Element {
  const {friendId, isLogin} = props;
  // using custom hook here...
  const isOnline = useFriendStatus(friendId);

  if (isOnline === null) return <p>Loading... (Friend Id = 0)</p>;
  return isOnline && isLogin ? <p>Online FS Func</p> : <p>Offline FS Func</p>;
}
