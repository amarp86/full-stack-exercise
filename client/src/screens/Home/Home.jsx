import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import Posts from "../../components/Posts/Posts";
import "./Home.css"

const Home = () => {

  return (
    <Layout>
      <div className="home">
        <Posts />
      </div>
    </Layout>
  );
};

export default Home;
