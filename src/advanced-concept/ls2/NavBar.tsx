import {Link} from 'react-router-dom';

type Props = {
  routeNames: string[];
  routeToLinkName: Record<string, string>;
};
export default function NavBar(props: Props): JSX.Element {
  const {routeNames: links, routeToLinkName: linkToPage} = props;
  const showNavLinks = links.map((link) => (
    <li>
      <Link to={link}>{linkToPage[link]}</Link>
    </li>
  ));
  return (
    <div>
      Navigation
      <ul>{showNavLinks}</ul>
    </div>
  );
}
