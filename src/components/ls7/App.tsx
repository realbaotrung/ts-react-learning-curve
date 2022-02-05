import Blog from './Blog';

const posts = [
  {
    id: 1,
    title: 'Hello World',
    content: 'Welcome to learning React!',
  },
  {
    id: 2,
    title: 'Installation',
    content: 'You can install React from npm.',
  },
];

export default function App(): JSX.Element {
  return <Blog posts={posts} />;
}
