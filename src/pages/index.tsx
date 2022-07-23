import Main from '@/components/Main';
import Qwerty from '@/components/Qwerty';
import styles from '@/styles/pages/Home.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <Main />
      <Qwerty />
    </div>
  )
}

export default Home;
