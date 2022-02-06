import {IAuthor} from './shared/IAuthor';
import {useFetchImage} from './shared/useFetchImage';

type Props = {
  user: IAuthor;
};

export default function Avatar(props: Props): JSX.Element | null {
  const {user} = props;
  const imgURL = user.avatarUrl;
  const {hasLoaded, hasError} = useFetchImage(imgURL);

  if (hasError) {
    return null;
  }
  return <div>{hasLoaded && <img src={imgURL} alt={user.name} />}</div>;
}
