// import { useState } from 'react';
// import boxes from '@/lib/data/boxes';
import styles from '@/styles/components/Main.module.scss';

export default function Main() {
  // const [boxes, setBoxes] = useState(Array(30).fill(null));

  return (
    <div className={styles['main-container']}>
      <div className={styles.grid}>
        {Array(30).fill(null).map((_, i) => (
          <div key={i} className={styles.box} />
        ))}
      </div>
    </div>
  )
}
