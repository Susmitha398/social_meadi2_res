// PostLayout.js
import { Link, Outlet } from 'react-router-dom';

const PostLayout = () => {
  return (
    <>
      <h1>Posts</h1>
      <Link to="/postpage/1">Post 1</Link>
      <br />
      <Link to="/postpage/2">Post 2</Link>
      <br />
      <Link to="/postpage/3">Post</Link>
      <br />
      <Link to="/postpage/newpost">New Post</Link>
      <Outlet /> {/* This will render nested routes */}
    </>
  );
}

export default PostLayout;
