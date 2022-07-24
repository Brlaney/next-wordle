import { useState, useEffect } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Navbar from '@/components/Navbar';
import Body from '@/components/Body';
import Qwerty from '@/components/Qwerty';
import Modal from '@/components/Modal';
import styles from '@/styles/pages/Home.module.scss';

const Home = ({ word }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState<number>(0);
  const [solution, setSolution] = useState<string>(word.word);
  const [parsedSolution, setParsedSolution] = useState(['', '', '', '', '']);

  const lowerCaseSolution = solution.toLowerCase();
  const v = lowerCaseSolution.split('');

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

export const getStaticProps: GetStaticProps = async _context => {
  // There are 659 words currently contained in this endpoint
  let randomInt = Math.floor(Math.random() * 659) + 1;
  const endpoint = `${process.env.NEXT_PUBLIC_SERVER}/api/words/${randomInt}`;
  const res = await fetch(endpoint);
  const data = await res.json();

  return {
    props: {
      word: data
    }
  }
};

export default Home;
