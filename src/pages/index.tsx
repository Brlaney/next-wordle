import { useState } from 'react';
import { useRouter } from "next/router";
import Body from '@/components/Body';
import Qwerty from '@/components/Qwerty';
import Modal from '@/components/Modal';
import ModalDetail from '@/components/Modal-Detail';
import styles from '@/styles/pages/Home.module.scss';

const Home = () => {
  let router = useRouter();
  // const [showMenu, setShowMenu] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);
  // const [showStatsModal, setShowStatsModal] = useState(false);
  // const [showSettingsModal, setShowSettingsModal] = useState(false);

  return (
    <div className={styles.container}>
      {showHelpModal && (
        <Modal
          onClose={() => {
            router.push("/");
          }}
        >
          <ModalDetail />
        </Modal>
      )}
      <Body />
      <Qwerty />
    </div>
  )
};

export default Home;
