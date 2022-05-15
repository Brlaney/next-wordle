import { observer, useLocalObservable } from 'mobx-react-lite';

export default observer(function Home() {
  const store = useLocalObservable(() => PuzzleStore)

  return (
    <div>
      <h1>Next-Wordle</h1>
      <Guess />
      <h1>Won/Loss</h1>
      <Querty />
    </div>
  )
})
