import {IPost} from './IPost';
import Post from './Post';

type Props = {
  posts: IPost[];
};

export default function Blog(props: Props): JSX.Element {
  const {posts} = props;

  const sidebar = (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );

  const content = posts.map((post) => (
    /**
     * Keys serve as a hint to React but they don't get
     * passed to your components. If you need the same
     * value in your component, pass it explicitly as
     * a prop with a different name.
     */
    <Post
      key={post.id}
      id={post.id}
      title={post.title}
      content={post.content}
    />
  ));

  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}
