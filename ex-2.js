const a = {
  josh: 2,
  valueOf: () => a.josh++,
};

if (a == 2 && a == 3) {
  console.log("yo");
}
