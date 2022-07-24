const random = (max: number) => {
  let randomNum = Math.floor(Math.random() * max) + 1;

  return randomNum;
};

export default random;
