// Post.js
import { useParams } from 'react-router-dom';

const Post = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Post ID: {id}</h1>
      {/* You can add more content here to display the actual post details */}
    </div>
  );
}

export default Post;
