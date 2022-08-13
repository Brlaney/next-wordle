import { useState, useEffect } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Navbar from '@/components/Navbar';
import Body from '@/components/Body';
import Keyboard from '@/components/Keyboard';
import Modal from '@/components/Modal';
import styles from '@/styles/pages/Home.module.scss';

const Home = ({ word }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [firstLoad, setFirstLoad] = useState<Boolean>(true);

  const [openModal, setOpenModal] = useState<Boolean>(false);
  const [modalType, setModalType] = useState<number>(0);

  const [solution, setSolution] = useState<string>(word.word);
  const [parsedSolution, setParsedSolution] = useState<string[]>(solution.toUpperCase().split(''));

  const [selected, setSelected] = useState<string[]>();


  useEffect(() => {
    // (Test) Display solution:
    // console.log(solution);
    // console.log(parsedSolution);
    // console.log(selected);

    if (firstLoad) {
      setFirstLoad(false);
    }

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
        <Keyboard
          solution={parsedSolution}
        />
      </div>
    </>
  )
};

export const getStaticProps: GetStaticProps = async _context => {
  // Current number of words: 659 
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
