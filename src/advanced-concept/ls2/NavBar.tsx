import {Link} from 'react-router-dom';

// ==========================
// For Mapping links to pages
// ==========================
const routeNames = ['/', '/about', '/contact'];
const routeToLinkName: Record<number, string> = {
  0: 'Home',
  1: 'About Us',
  2: 'Contact Us',
};

export default function NavBar(): JSX.Element {
  const showNavLinks = routeNames.map((link) => (
    <li key={link}>
      <Link to={link}>{routeToLinkName[routeNames.indexOf(link)]}</Link>
    </li>
  ));
  return (
    <div>
      Navigation
      <ul>{showNavLinks}</ul>
    </div>
  );
}
