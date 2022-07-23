import { qwerty } from '@/lib/data/keyboard';
import styles from '@/styles/components/Qwerty.module.scss';

export default function Qwerty() {
  return (
    <div className={styles['keyboard-container']}>
      {qwerty.map((row, i) => (
        <div key={i} className={styles['keyboard-grid']}>
          {row.keys.map((key, i) => (
            <div key={i} className={styles.key}>
              {key}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
