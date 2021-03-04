import Layout from "../../components/shared/Layout/Layout";
import { useState, useEffect } from "react";

import { useHistory, useParams } from "react-router-dom";
import { getPost, updatePost } from "../../services/postsAxios";
import "./Edit.css";
const Add = (props) => {
  const history = useHistory();
  let { id } = useParams();

  useEffect(() => {
    const getThisPost = async () => {
      const thisPost = await getPost(id);
      setPost(thisPost);
    };
    getThisPost();
  }, [id]);

  const [post, setPost] = useState({
    title: "",
    content: "",
    imgURL: "",
    author: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePost(id, post);
    history.push("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  return (
    <Layout>
      <div className="add-div">
        <form className="el-formo" onSubmit={handleSubmit}>
          <input
            className="input-title"
            type="text"
            placeholder="Add-o Title-o Here-o"
            value={post.title}
            name="title"
            onChange={handleChange}
          />
          <textarea
            className="input-content"
            type="text"
            placeholder="Add-o Content-o Here-o"
            value={post.content}
            name="content"
            onChange={handleChange}
          />
          <input
            className="input-author"
            type="text"
            placeholder="Add-o Author-o Here-o"
            value={post.author}
            name="author"
            onChange={handleChange}
          />
          <input
            className="input-image"
            type="text"
            placeholder="Add-o Image-Link-o Here-o"
            value={post.imgURL}
            name="imgURL"
            onChange={handleChange}
          />
          <button className="submit-button">Edit-o!</button>
        </form>
      </div>
    </Layout>
  );
};

export default Add;
