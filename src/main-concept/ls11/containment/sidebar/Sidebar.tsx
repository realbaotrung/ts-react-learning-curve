import Chat from './Chat';
import Contacts from './Contacts';
import SplitPane from './SplitPane';

export default function Sidebar(): JSX.Element {
  return <SplitPane left={<Contacts />} right={<Chat />} />;
}
