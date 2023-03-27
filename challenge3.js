//Challenge3
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const letterAtPosition = (index) => {
  const pos = index - 1;
  if (pos < 0 || pos > 26) return console.log("invalid");
  if (Number.isInteger(pos)) return console.log(alphabet[pos]);
};

letterAtPosition(6);
