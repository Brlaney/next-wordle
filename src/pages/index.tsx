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
  const [modalType, setModalType] = useState(0 | 1 | 2 | 3);

  // const [showMenu, setShowMenu] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [showStatsModal, setShowStatsModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  // const handleClose = () => {
  //   setModalType(0)
  // }

  return (
    <>
      <Navbar
        openState={setOpenModal}
        open={openModal}
        theModalType={setModalType}
        helpModal={showHelpModal}
        statsModal={showStatsModal}
        settingsModal={showSettingsModal}
      />
      <div className={styles.container}>
        <Modal
          open={openModal}
          onClose={() => setModalType(0)}
          displayType={modalType}
        />
        <Body />
        <Qwerty />
      </div>
    </>
  )
};

export default Home;
