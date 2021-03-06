import GuestGreeting from './greeting/GuestGreeting';
import UserGreeting from './greeting/UserGreeting';

type Props = {
  isLoggedIn: boolean;
};

export default function Greeting(props: Props): JSX.Element {
  const {isLoggedIn} = props;

  // if (isLoggedIn) {
  //   return <UserGreeting />;
  // }
  // return <GuestGreeting />;

  // return <div>{isLoggedIn ? <UserGreeting /> : <GuestGreeting />}</div>;

  return (
    <div>
      {isLoggedIn && <UserGreeting />}
      {!isLoggedIn && <GuestGreeting />}
    </div>
  );
}
