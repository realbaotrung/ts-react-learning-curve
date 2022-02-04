import {ReactElement} from 'react';

type Props = {
  id: number;
  title: string;
  content: string;
};

export default function Post(props: Props): ReactElement {
  const {id, title, content} = props;

  return (
    <div>
      <h3>
        #{id} {title}
      </h3>
      <p>{content}</p>
    </div>
  );
}
