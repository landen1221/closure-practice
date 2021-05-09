function curriedAdd(total = 0) {
  return function runAgain(num) {
    if (!num) return total;
    total += num;
    return runAgain;
  };
}


module.exports = { curriedAdd };
