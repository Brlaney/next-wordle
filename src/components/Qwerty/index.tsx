import { rows } from '@/lib/data/keyboard';
import { IKeyboard, IKeys } from '@/lib/types'
import Back from '@/components/Icons/Back';
import styles from '@/styles/components/Qwerty.module.scss';

const Qwerty = () => {
  return (
    <div className={styles['keyboard-container']}>

      {rows.map((row: IKeyboard) => (
        <div key={row.rowNumber} className={styles['keyboard-grid']}>

          {row.keys.map((row: IKeys) => (
            (row.rowNumber != 3 ? (
              <div key={row.pk} className={styles.key}>{row.key}</div>
            ) : (
              <div key={row.pk} className={row.pk == 21 || row.pk == 29 ? styles['wide-key'] : styles.key}>
                {row.pk == 29 ? (<Back />) : (<>{row.key}</>)}
              </div>
            ))
          ))}
        </div>
      ))}
    </div>
  )
};

export default Qwerty;
