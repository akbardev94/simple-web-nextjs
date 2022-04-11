import Layout from '../../components/Layout';
import styles from '../../styles/Blog.module.css';

interface Blog {
  id:number;
  title: string;
  content: string;
}

interface BlogDetailProps {
  blog: Blog;
}

export default function usersDetails(props: BlogDetailProps) {
  
  const {blog} = props;
  return (
    <Layout pageTitle="Blog Detail">
      <div className={styles.card}>
        <p>{blog.title}</p>
        <p>{blog.content}</p>
        <a className="btn btn-dark" href="/blogs">Back</a>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.API_ENDPOINT}/posts`)
  const dataBlog = await res.json();
   
  const paths = dataBlog.map ((blog: Blog) => {
    return {
      params: {
        id: `${blog.id}`,
      },
    };
  })
  return {
    paths,
    fallback: false,
  };  
}

interface GetStaticProps {
  params: {
    id:string;
  }
}

export async function getStaticProps(context: GetStaticProps) {
  const  {id} = context.params;
  const res = await fetch(`${process.env.API_ENDPOINT}/posts/${id}`)
  const blog = await res.json();
  return {
    props: {
      blog, 
    }
  }
}