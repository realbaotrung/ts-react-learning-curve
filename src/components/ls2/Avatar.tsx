import {ReactElement} from 'react';
import {IAuthor} from './shared/IAuthor';
import {useFetchImage} from './shared/useFetchImage';

interface IProps {
  user: IAuthor;
}

export default function Avatar(props: IProps): ReactElement | null {
  const {user} = props;
  const imgURL = user.avatarUrl;
  const {hasLoaded, hasError} = useFetchImage(imgURL);

  if (hasError) {
    return null;
  }
  return <div>{hasLoaded && <img src={imgURL} alt={user.name} />}</div>;
}
