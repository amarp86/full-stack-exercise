import { getPosts } from "../../services/postsAxios.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Posts.css";

function Posts(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getAllPosts = async () => {
      const allPosts = await getPosts();
      setPosts(allPosts);
    };
    getAllPosts();
  }, []);

  return (
    <div className="all-posts">
      {posts.map((post, index) => (
        <div key={index} className="individual-posts">
          <Link to={`/posts/${post._id}`}>
            <h2>{post.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Posts;
