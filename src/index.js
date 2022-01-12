module.exports = function reverse(n) {
  let count = Math.abs(n);
  count = count.toString();
  count =  count.split('').reverse().join('');
  count = Number(count);
    return count;
}

