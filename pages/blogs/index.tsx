import Layout from "../../components/Layout";
import { useState, useEffect} from "react";
import {useRouter} from "next/router" ;
import axios from "axios";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const apiEndPoint = `${process.env.API_ENDPOINT}/posts`;
  useEffect(() => {
    const getPosts = async () => {
      const { data: res } = await axios.get(apiEndPoint);
      setPosts(res);
    };
    getPosts();
  }, []);

  const addPost = async () => {
    const post = { title: "Added", content: "Added" };
    await axios.post(apiEndPoint, post);
    setPosts([post, ...posts]);
  };

  const handleUpdate = async (post) => {
    post.title = "Updated";
    post.content = "Updated";
    await axios.put(apiEndPoint + "/" + post.id);
    const postsClone = [...posts];
    const index = postsClone.indexOf(post);
    postsClone[index] = { ...post };
    setPosts(postsClone);
  };

  const deletePost = async (post) => {
    await axios.delete(apiEndPoint + "/" + post.id + post);
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const router = useRouter();

  if (posts.length === 0) return <h2> there are no post in the Database </h2>;
  return (
    <Layout pageTitle="Blog">
    <div className="container mt-4">
      <h2> there are {posts.length} post in the Database </h2>
      <button  onClick={addPost} className="btn btn-primary btn-lg mb-3" >
        Add Post
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
            <th>Update</th>
            <th>Delete</th>
            <th>Show</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr>
              <td> {post.title} </td>
              <td> {post.content} </td>
              <td>
                <button
                  onClick={() => handleUpdate(post)}
                  className="btn btn-warning btn-sm"
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  onClick={() => deletePost(post)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
              <td>
                <button onClick={() => router.push(`/blogs/${post.id}`)}
                  className="btn btn-success btn-sm"
                >
                  Show
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </Layout>
  );
};

export default Blogs;