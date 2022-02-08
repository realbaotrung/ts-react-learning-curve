/* eslint-disable no-console */
export type Status = {
  isOnline: boolean | null;
};

export default class ChatAPI {
  private timeId!: NodeJS.Timeout;

  private status: Status = {
    isOnline: null,
  };

  public subscribeToFriendStatus = (
    friendId: number,
    callback: (obj: Status) => void
  ): void => {
    console.log('from subscribe.');
    if (friendId) {
      this.timeId = setTimeout(() => {
        this.status.isOnline = true;
        callback(this.status);
      }, 2000);
    }
  };

  public unsubscribeFromFriendStatus = (): void => {
    console.log('from unsubscribe.');
    clearTimeout(this.timeId);
  };
}
