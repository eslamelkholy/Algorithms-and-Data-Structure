const countDown = (i) => {
  console.log(`Current Value = ${i}`);
  if (i <= 0) return;
  countDown(i - 1);
};

countDown(5);
