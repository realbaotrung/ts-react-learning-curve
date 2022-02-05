import FancyBorder from './FancyBorder';

export default function WelcomeDialog(): JSX.Element {
  return (
    <FancyBorder color="blue">
      {/*
      ===============================================================
      Anything inside the <FancyBorder> JSX tag gets passed into
      the FancyBorder component as a children prop.
      Since FancyBorder renders {props.children}
      inside a <div>, the passed elements appear in the final output.
      ===============================================================
      */}
      <h3 className="Dialog-title">Welcome</h3>
      <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
    </FancyBorder>
  );
}
