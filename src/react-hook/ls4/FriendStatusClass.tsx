import React from 'react';
import ChatAPI, {Status} from './ChatAPI';

type Props = {
  friendId: number;
  isLogin: boolean;
};
type State = {
  isOnline: boolean | null;
};

export default class FriendStatusClass extends React.Component<Props, State> {
  private chatApi: ChatAPI;

  constructor(public props: Props) {
    super(props);
    this.state = {
      isOnline: null,
    };
    this.chatApi = new ChatAPI();
  }

  componentDidMount(): void {
    const {friendId} = this.props;
    this.chatApi.subscribeToFriendStatus(friendId, this.handleStatusChange);
  }

  componentDidUpdate(prevProps: Props): void {
    /**
     * Tip: Optimizing Performance by Skipping Effects
     *
     * In some cases, cleaning up or applying the effect
     * after every render might create a performance problem.
     * In class components, we can solve this by writing an extra comparison
     *
     * this equivalent === useEffect(() => {...}, [friendId])
     */
    const {friendId} = this.props;
    if (prevProps.friendId !== friendId) {
      // unsubscribe from previous
      this.chatApi.unsubscribeFromFriendStatus();
      // set the next
      this.chatApi.subscribeToFriendStatus(friendId, this.handleStatusChange);
    }
  }

  componentWillUnmount(): void {
    this.chatApi.unsubscribeFromFriendStatus();
  }

  handleStatusChange = (status: Status): void => {
    this.setState({
      isOnline: status.isOnline,
    });
  };

  render(): JSX.Element {
    const {isOnline} = this.state;
    const {isLogin} = this.props;

    if (isOnline === null) {
      return <p>Loading... (Friend Id = 0)</p>;
    }
    if (isOnline && isLogin) {
      return <p>Online FS Class</p>;
    }
    return <p>Offline FS Class</p>;
  }
}
