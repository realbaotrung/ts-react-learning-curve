import {ReactElement} from 'react';
import Comment from './Comment';

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64',
  },
};

export default function App(): ReactElement {
  return <Comment date={comment.date} text={comment.text} user={comment.author} />;
}
