import axios from 'axios';
import styles from '../styles/Home.module.css'

const Home = ({ employees, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <div className={styles.container}>
      <h1>Daftar Employee</h1>
      <ul>
        {employees.map(employee => (
          <p key={employee.id}>{employee.attributes.Nama} {employee.attributes.nip}</p>
        ))}
      </ul>
    </div>
  );
};

Home.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://localhost:1337/api/pegawais');
    const employees = res.data.data;
    console.log(employees);
    return { employees };
  } catch (error) {
    return { error };
  }
};

export default Home;