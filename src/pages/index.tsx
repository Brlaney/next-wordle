import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Body from '@/components/Body';
import Qwerty from '@/components/Qwerty';
import Modal from '@/components/Modal';
import styles from '@/styles/pages/Home.module.scss';

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState<number>(0);

  useEffect(() => {
    if (modalType == 0) {
      setOpenModal(false)
    } else {
      setOpenModal(true)
    }
  }, [modalType])

  return (
    <>
      <Navbar
        openState={setOpenModal}
        theModalType={setModalType}
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
