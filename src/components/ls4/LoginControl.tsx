import React, {ReactElement} from 'react';
import LoginButton from './button/LoginButton';
import LogoutButton from './button/LogoutButton';
import Greeting from './Greeting';

interface IProps {}

interface IState {
  isLoggedIn: boolean;
}

export default class LoginControl extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {isLoggedIn: false};
  }

  private handleLoginClick = (): void => {
    this.setState(() => ({
      isLoggedIn: true,
    }));
  };

  private handleLogoutClick = (): void => {
    this.setState(() => ({
      isLoggedIn: false,
    }));
  };

  // public render(): ReactElement {
  //   const {isLoggedIn} = this.state;
  //   let button;

  //   switch (isLoggedIn) {
  //     case true:
  //       button = <LogoutButton onClick={this.handleLogoutClick} />;
  //       break;
  //     case false:
  //       button = <LoginButton onClick={this.handleLoginClick} />;
  //       break;
  //     default:
  //   }

  //   return (
  //     <div>
  //       <Greeting isLoggedIn={isLoggedIn} />
  //       {button}
  //     </div>
  //   );
  // }

  // public render(): ReactElement {
  //   const {isLoggedIn} = this.state;

  //   return (
  //     <div>
  //       <Greeting isLoggedIn={isLoggedIn} />
  //       {/*
  //       ===========================================
  //       Inline If-Else with Conditional Operator
  //       ===========================================
  //       */}
  //       {isLoggedIn ? (
  //         <LogoutButton onClick={this.handleLogoutClick} />
  //       ) : (
  //         <LoginButton onClick={this.handleLoginClick} />
  //       )}
  //     </div>
  //   );
  // }

  public render(): ReactElement {
    const {isLoggedIn} = this.state;

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {/*
        ===========================================
        Inline If with Logical && Operator
        ===========================================
        */}
        {isLoggedIn && <LogoutButton onClick={this.handleLogoutClick} />}
        {!isLoggedIn && <LoginButton onClick={this.handleLoginClick} />}
      </div>
    );
  }
}
