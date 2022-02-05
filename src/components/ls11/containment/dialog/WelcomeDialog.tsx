import Dialog from './Dialog';

export default function WelcomeDialog(): JSX.Element {
  return (
    <Dialog title="Welcome" message="Thank you for visiting our spacecraft!">
      <p>Hello from inside Dialog!</p>
    </Dialog>
  );
}
