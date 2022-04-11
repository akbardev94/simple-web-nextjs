import Layout from '../../components/Layout';
import styles from "../../styles/Users.module.css";

interface User {
  id:number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface UserDetailProps {
  user: User;
}

export default function usersDetails(props: UserDetailProps) {
  
  const {user} = props;
  return (
    <Layout pageTitle="User Detail">
      <div className={styles.card}>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.website}</p>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const dataUsers = await res.json();
   
  const paths = dataUsers.map ((user: User) => {
    return {
      params: {
        id: `${user.id}`,
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
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const user = await res.json();
  return {
    props: {
      user, 
    }
  }
}