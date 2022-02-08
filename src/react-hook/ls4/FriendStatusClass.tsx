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
      return <p>Loading...</p>;
    }
    if (isOnline && isLogin) {
      return <p>Online</p>;
    }
    return <p>Offline</p>;
  }
}
