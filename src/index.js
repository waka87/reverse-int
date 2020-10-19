module.exports = function reverse (n) {
  if (n > 0) {
  var a = n.toString();
  var arr = Array.from(a).reverse().map(Number).join('');
  return arr;
  } else {
    n = n * (-1); 
    var a = n.toString();
  var arr = Array.from(a).reverse().map(Number).join('');
  return arr;
  }

}
