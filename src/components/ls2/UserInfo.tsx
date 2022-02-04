import {ReactElement} from 'react';
import Avatar from './Avatar';
import {IAuthor} from './shared/IAuthor';

type Props = {
  user: IAuthor;
};

export default function UserInfo(props: Props): ReactElement {
  const {user} = props;
  return (
    <div className="UserInfo">
      <Avatar user={user} />
      <div className="UserInfo-name">{user.name}</div>
    </div>
  );
}
