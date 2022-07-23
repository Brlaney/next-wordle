// import { useState } from 'react';
import Body from '@/components/Body';
import Qwerty from '@/components/Qwerty';
import styles from '@/styles/pages/Home.module.scss';

const Home = () => {
  // const [showMenu, setShowMenu] = useState(false);
  // const [showHelpModal, setShowHelpModal] = useState(false);
  // const [showStatsModal, setShowStatsModal] = useState(false);
  // const [showSettingsModal, setShowSettingsModal] = useState(false);

  return (
    <div className={styles.container}>
      <Body />
      <Qwerty />
    </div>
  )
}

export default Home;
