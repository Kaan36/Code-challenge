//Challenge2

const secondLargest = (array) => {
  const maxValue = Math.max(...array);
  const result = array.filter((v) => v !== maxValue);
  console.log(Math.max(...result));
};

secondLargest([10, 40, 30, 20, 50]);
secondLargest([25, 143, 89, 13, 105]);
secondLargest([54, 23, 11, 17, 10]);
