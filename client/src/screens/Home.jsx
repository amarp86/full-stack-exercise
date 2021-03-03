import React from "react";
import Layout from "../components/shared/Layout";
import Posts from "../components/Posts";

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
