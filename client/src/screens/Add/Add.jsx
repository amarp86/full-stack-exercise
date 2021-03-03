import Layout from "../../components/shared/Layout/Layout";
import { useState } from "react";
import { createPost } from "../../services/postsAxios";
import { useHistory } from "react-router-dom";

const Add = (props) => {
  const history = useHistory();

  const [post, setPost] = useState({
    title: "",
    content: "",
    imgURL: "",
    author: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost(post);
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
            type="textarea"
            placeholder="Add-o Title-o Here-o"
            value={post.title}
            name="title"
            onChange={handleChange}
          />
          <textarea
            type="text"
            placeholder="Add-o Content-o Here-o"
            value={post.content}
            name="content"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Add-o Author-o Here-o"
            value={post.author}
            name="author"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Add-o Image-Link-o Here-o"
            value={post.imgURL}
            name="imgURL"
            onChange={handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    </Layout>
  );
};

export default Add;
