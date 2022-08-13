import { useEffect, useState } from 'react';
import { rows } from '@/lib/data/keyboard';
import { IKeyboard, IKeys } from '@/lib/types'
import Back from '@/components/Icons/Back';
import styles from '@/styles/components/Keyboard.module.scss';

const Keyboard = ({ solution }) => {
  const [globalTurn, setGlobalTurn] = useState<number>(0)
  const [localTurn, setLocalTurn] = useState<number>(0)
  // const clickKeyRef = useRef()
  const [sel, setSel] = useState<number>()
  const [chr, setChr] = useState<string>()

  const [test, setTest] = useState([])

  const handleChange = (sel: number) => {
    if (sel == 20) {
      if (localTurn < 5) {
        console.log('You have not selected 5 letters yet')
      } else if (localTurn == 5) {
        console.log('Turn Number 5 and selected enter')
        console.log('Three possible cases: \n1.) You guessed the solution word \n2.) You guessed incorrectly \n3.) Your guess is not a word')
      }
    } else if (sel == 28) {
      if (localTurn > 0 && localTurn < 6) {
        console.log('Erase the last entry in store selection array')
        setLocalTurn(localTurn - 1)
        let data = []
        for (let i = 0; i < localTurn - 1; i++) {
          data.push(test[i])
        }
        setTest(data)
      } else {
        console.log('Error - out of bounds')
      }
    } else if (localTurn == 5) {
      console.log('Error -  you cant do that.')
    } else {
      let thisChr = rows[sel - 1].chr.toUpperCase()
      setSel(sel)
      setChr(thisChr)
      if (test.length == 0) {
        setTest([chr])
      } else if (test[0] == undefined) {
        setTest([chr])
      } else {
        setTest([...test, chr])
      }
      setLocalTurn(localTurn + 1)
    }
  }

  useEffect(() => {
    // console.log('Currently selected Char., Index pair: ', chr, ', ', sel)
    // console.log('local turn: ', localTurn)
    // console.log('global turn: ', globalTurn)
    if (test)
    console.log('\nCurrent sel array: ', test)
  }, [test])

  return (
    <div className={styles['keyboard-container']}>
      <div className={styles['keyboard-grid']}>
        {rows.map((key: IKeys) => (
          <div
            key={key.pk}
            className={key.pk == 20 || key.pk == 28 ? styles['wide-key'] : styles.key}
            onClick={() => handleChange(key.pk)}
          >
            {key.pk == 28 ? <Back /> : (<>{key.chr}</>)}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Keyboard;
