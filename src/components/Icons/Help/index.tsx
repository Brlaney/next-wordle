import { useEffect } from 'react';

export default function Help({ display }) {
  useEffect(() => {
  }, [display])

  return (
    <>
      <svg
        width="26"
        height="26"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.125 11.0001C21.125 16.592 16.5919 21.1251 11 21.1251C5.40812 21.1251 0.875 16.592 0.875 11.0001C0.875 5.40824 5.40812 0.875122 11 0.875122C16.5919 0.875122 21.125 5.40824 21.125 11.0001Z"
          // stroke="#FDFDFD"
          stroke={display ? `#59595A` : `#FDFDFD`}
          strokeWidth="1.75"
        />
        <path
          d="M11 13.5V13C13.5 11 14.5 10 14.5 8.5C14.5 6 12.5 5 11 5C9.5 5.00011 7.5 6 7.5 8"
          // stroke="#FDFDFD"
          stroke={display ? `#59595A` : `#FDFDFD`}
          strokeWidth="2"
          strokeLinecap="square"
        />
        <path
          d="M11 17V17.5"
          // stroke="#FDFDFD"
          stroke={display ? `#59595A` : `#FDFDFD`}
          strokeWidth="2"
          strokeLinecap="square"
        />
      </svg>
    </>
  );
}
