import WelcomeDialog from './containment/dialog/WelcomeDialog';
import Sidebar from './containment/sidebar/Sidebar';

export default function App(): JSX.Element {
  return (
    <div>
      <h2>WelcomeDialog #1</h2>
      <WelcomeDialog />
      <h2>Sidebar #2</h2>
      <Sidebar />
    </div>
  );
}
