import { useState, useEffect } from 'react';
// import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Navbar from '@/components/Navbar';
import Body from '@/components/Body';
import Qwerty from '@/components/Qwerty';
import Modal from '@/components/Modal';
import random from '@/lib/utils/random';

import styles from '@/styles/pages/Home.module.scss';

// const Home = ({ words }: InferGetStaticPropsType<typeof getStaticProps>) => {
const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState<number>(0);

  useEffect(() => {
    console.log(random(659));

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

// There are 659 words in the following endpoint:
/*
 export const getStaticProps: GetStaticProps = async _context => {
   const endpoint = `${process.env.NEXT_PUBLIC_SERVER}/api/words`;
   const res = await fetch(endpoint);
   const words: String[] = await res.json();
   const words = await res.json();
   
   return {
     props: {
       words
     }
   }
 };
*/

export default Home;
