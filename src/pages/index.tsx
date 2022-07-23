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
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [showStatsModal, setShowStatsModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  return (
    <>
      <Navbar
        openState={setOpenModal}
        open={openModal}
        helpModal={showHelpModal}
        statsModal={showStatsModal}
        settingsModal={showSettingsModal}
      />
      <div className={styles.container}>
        <button
          className={styles['modal-btn']}
          onClick={() => setOpenModal(true)}
        >
          Modal
        </button>
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
        />
        <Body />
        <Qwerty />
      </div>
    </>
  )
};

export default Home;
