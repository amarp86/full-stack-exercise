import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import { Link } from "react-router-dom";
import { getPost, deletePost } from "../../services/postsAxios";
import "./Detail.css";

function Detail(props) {
  const [posts, setPosts] = useState([]);
  const history = useHistory();
  console.log(props);
  const { id } = useParams();

  useEffect(() => {
    const getAllPosts = async () => {
      const allPosts = await getPost(id);

      setPosts(allPosts);
    };
    getAllPosts();
  }, [id]);

  const deleteMe = async () => {
    await deletePost(posts._id);
    history.push("/");
  };

  return (
    <Layout>
      <div className="detail-div">
        <div className="post-details-title">{posts.title}</div>
        <img className="details-img" src={posts.imgURL} alt="post" />
        <div className="post-details-content">{posts.content}</div>
        <div className="post-details-author">{posts.author}</div>
      </div>
      <Link to={`/edit/${id}`}>
        <button>Edit This Post-o</button>
      </Link>

      <button onClick={deleteMe}>Delete-o Me-o</button>
    </Layout>
  );
}

export default Detail;
