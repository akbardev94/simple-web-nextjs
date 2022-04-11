import Layout from "../../components/Layout";
  import {useRouter} from "next/router" ;
import styles from "../../styles/Users.module.css";


interface UserProps {
  dataUsers: Array<any>;
}

export default function Users(props: UserProps) {
  const {dataUsers} = props;
  const router = useRouter();

  console.log(dataUsers);
  return (
    <Layout pageTitle="User Page">
      {dataUsers.map(user => {
        return (
          <div key={user.id} className={styles.card}>
            <p>{ user.name }</p>
            <p>{ user.email }</p>
            <button onClick={() => router.push(`/users/${user.id}`)} className="btn btn-success">User Detail</button>
          </div>
        )
      })}
    </Layout>
  )
}

export async function getStaticProps(){
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };  
}
