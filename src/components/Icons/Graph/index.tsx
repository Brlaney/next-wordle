export default function Graph() {
  return (
    <>
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.5 8.5V20.5H8.5V8.5H1.5Z"
          stroke="white" 
          strokeWidth="2"
          strokeLinecap="square"
        />
        <path
          d="M8.5 8V1.5H15.5V11H22.5V20.5H8.5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="square"
        />
        <path
          d="M15.5 12V20"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="square"
        />
      </svg>
    </>
  )
};
