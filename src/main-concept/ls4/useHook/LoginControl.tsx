import {useState} from 'react';
import LoginButton from '../components/button/LoginButton';
import LogoutButton from '../components/button/LogoutButton';
import Greeting from '../components/Greeting';

function useHandlingLogin(): [boolean, () => void, () => void] {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const handleLoginClick = (): void => {
    setIsLoggedIn(true);
  };
  const handleLogoutClick = (): void => {
    setIsLoggedIn(false);
  };
  return [isLoggedIn, handleLoginClick, handleLogoutClick];
}

export default function LoginControl(): JSX.Element {
  const [isLoggedIn, handleLoginClick, handleLogoutClick] = useHandlingLogin();
  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {/*
        ===========================================
        Inline If with Logical && Operator
        ===========================================
        */}
      {isLoggedIn && <LogoutButton onClick={handleLogoutClick} />}
      {!isLoggedIn && <LoginButton onClick={handleLoginClick} />}
    </div>
  );
}
