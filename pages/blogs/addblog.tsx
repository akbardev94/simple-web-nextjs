import Layout from "../../components/Layout";
import styles from '../../styles/Blog.module.css';

export default function addBlog() {
  return (
    <Layout pageTitle="Add Blog">
        <div className={styles.form}>
              <form className="container">
                  <div className={styles.formGroup} >
                            <label> Title </label>
                            <input type='text' className={styles.formControl} required />
                  </div>
                        <div className={styles.formGroup} >
                            <label> Description </label>
                            <textarea className={styles.formControl} required></textarea>
                        </div>
                        <div className={styles.formGroup}>
                            <button className="btn btn-primary"> SUBMIT </button>
                        </div>
              </form>
          </div>
    </Layout>
  )
}
