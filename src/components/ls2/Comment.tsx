import {ReactElement} from 'react';
import {IAuthor} from './shared/IAuthor';
import UserInfo from './UserInfo';

type Props = {
  text: string;
  date: Date;
  user: IAuthor;
};

function formatDate(date: Date): string {
  return date.toLocaleDateString();
}

export default function Comment(props: Props): ReactElement {
  const {user, text, date} = props;
  return (
    <div className="Comment">
      <UserInfo user={user} />
      <div className="Comment-text">{text}</div>
      <div className="Comment-date">{formatDate(date)}</div>
    </div>
  );
}
