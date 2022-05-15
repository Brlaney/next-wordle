export default function Guess(word, guess, isGuessed) {
  return (
    <div
      className='grid grid-cols-5 gap-2'
    >
      {new Array(5).fill(0).map((_, i) => (
        <div
          className='h-16 w-16 border border-gray-200 bg-black text-white font-bold uppercase items-center justify-center'
        >
          {guess[i]}
        </div>
      ))}
    </div>
  )
}
