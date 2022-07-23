import { useState } from 'react';
// import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import Body from '@/components/Body';
import Qwerty from '@/components/Qwerty';
import Modal from '@/components/Modal';
import styles from '@/styles/pages/Home.module.scss';

const Home = () => {
  // let router = useRouter();
  const [openModal, setOpenModal] = useState(false);

  // const [showMenu, setShowMenu] = useState(false);
  // const [showHelpModal, setShowHelpModal] = useState(false);
  // const [showStatsModal, setShowStatsModal] = useState(false);
  // const [showSettingsModal, setShowSettingsModal] = useState(false);

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <button onClick={() => setOpenModal(true)} className={styles['modalBtn']}>
          Modal
        </button>
        <Modal open={openModal} onClose={() => setOpenModal(false)} />
        <Body />
        <Qwerty />
      </div>
    </>
  )
};

export default Home;
