function observable(observer) {
  let counter = 1;
  const producer = setInterval(() => {
    observer.next(counter++);
  }, 1000);
  return () => {
    clearInterval(producer);
  };
}

const closefun1 = observable({
  next: (data) => console.log('Obs1' + data),
  error: (err) => console.log('Obs1' + err),
  complete: () => console.log('Obs1 done'),
});
setTimeout(() => {
  closefun1();
}, 5000);

// const closefun2 = observable({
//   next: (data) => console.log('Obs2' + data),
//   error: (err) => console.log('Obs2' + err),
//   complete: () => console.log('Obs2 done'),
// });
// setTimeout(() => {
//   closefun2();
// }, 5000);
