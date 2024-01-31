function countDown(num) {
  if (num === 0) throw "what you doing bro";
  var a = num;
  setTimeout(() => {
    console.log(a);
    countDown(a - 1);
  }, 1000);
}

countDown(5);
