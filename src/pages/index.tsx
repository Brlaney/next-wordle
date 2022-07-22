import Qwerty from '@/components/Qwerty';
import styles from '@/styles/pages/Home.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        This is the homepage.
      </div>
      <Qwerty />
    </div>
  )
}

export default Home;
