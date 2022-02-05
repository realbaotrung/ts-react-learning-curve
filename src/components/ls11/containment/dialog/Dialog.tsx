import FancyBorder from './FancyBorder';

type Props = {
  title: string;
  message: string;
  children: React.ReactNode;
};

export default function Dialog(props: Props): JSX.Element {
  const {title, message, children} = props;
  return (
    <FancyBorder color="blue">
      <h3 className="Dialog-title">{title}</h3>
      <p className="Dialog-message">{message}</p>
      {children}
    </FancyBorder>
  );
}
