// Challenge1

// example 1
const strMatchBy2char = (string1, string2) => {
  const array1 = [...string1];
  const array2 = [...string2];
  const matches = array1.reduce(
    (a, v, index) =>
      v === array2[index] && v === array2[index + 1] ? [...a, v] : a,
    []
  );

  const matchesCount = matches.length;
  console.log(matchesCount);
};
strMatchBy2char("bboiizz", "bbuiiz");

//example2
const strMatchBy2charSecond = (string1, string2) => {
  const array1 = [...string1];
  const array2 = [...string2];
  let matches = [];
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      matches.push(array1[i]);
    }
  }

  const filteredMatches = matches.filter(
    (item, index) => matches.indexOf(item) === index
  );

  console.log(filteredMatches.length);
};
strMatchBy2charSecond("bboiizz", "bbuiiz");
