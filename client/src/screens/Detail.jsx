import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/shared/Layout";

import { getPost } from "../services/postsAxios";

function Detail(props) {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getAllPosts = async () => {
      const allPosts = await getPost(id);

      setPosts(allPosts);
    };
    getAllPosts();
  }, [id]);

  return (
    <Layout>
      <div className="detail-div">
        <div className="post-details-title">{posts.title}</div>
        <img className="details-img" src={posts.imgURL} alt="post" />
        <div className="post-details-content">{posts.content}</div>
        <div className="post-details-author">{posts.author}</div>
      </div>
    </Layout>
  );
}

export default Detail;
