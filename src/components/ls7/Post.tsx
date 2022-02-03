import {ReactElement} from 'react';

interface IProps {
  id: number;
  title: string;
  content: string;
}

export default function Post(props: IProps): ReactElement {
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
