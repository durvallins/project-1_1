/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import P from 'prop-types';

import './styles.css';

import { PostCard } from '../PostCard';

export const Posts = ({ posts = [] }) => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <div className="posts">
    {posts.map((post) => (
      <PostCard key={post.id} title={post.title} body={post.body} id={post.id} cover={post.cover} post={post} />
    ))}
  </div>
);

Posts.defaultProps = {
  posts: [],
};

Posts.proptypes = {
  posts: P.array,
};
