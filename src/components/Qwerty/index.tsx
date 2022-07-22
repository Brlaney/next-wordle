import { qwerty } from '@/lib/data/keyboard';
import styles from '@/styles/components/Qwerty.module.scss';

export default function Qwerty() {
  return (
    <>
      {qwerty.map((row, i) => (
        <div key={i} className={styles['keyboard-grid']} >
          {row.split('').map((char) => {
            return (
              <div id={char} className={styles.key}>
                {char}
              </div>
            )
          })}
        </div>
      ))}
    </>
  )
}
