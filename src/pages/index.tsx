import { observer, useLocalObservable } from 'mobx-react-lite';
import PuzzleStore from '@/stores/PuzzleStore';
import Qwerty from '@/components/Qwerty';
import Guess from '@/components/Guess';

export default observer(function Home() {
  const store = useLocalObservable(() => PuzzleStore)

  return (
    <div className='flex h-screen w-screen flex-col bg-gray-600'>
      <h1
        className='text-6xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-400'
      >
        Next-Wordle
      </h1>
      <Guess
        word='tests'
        guess='guess'
        isGuessed={false}
      />
      <h1>Won/Loss</h1>
      <Qwerty
      />
    </div>
  )
})
