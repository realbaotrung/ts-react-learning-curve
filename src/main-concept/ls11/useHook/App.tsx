import SignUpDialog from './containment/dialog/SignUpDialog';
import WelcomeDialog from './containment/dialog/WelcomeDialog';
import Sidebar from './containment/sidebar/Sidebar';

export default function App(): JSX.Element {
  return (
    <div>
      <h2>WelcomeDialog #1</h2>
      <WelcomeDialog />
      <hr />
      <h2>Sidebar #2</h2>
      <Sidebar />
      <hr />
      <h2>SignUpDialog #3</h2>
      <SignUpDialog />
    </div>
  );
}
