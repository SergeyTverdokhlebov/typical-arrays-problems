
exports.min = function min (array) {
  if (!array || array.length === 0) {
    return 0;
  }
  else{
    let min = 0;
    min = Math.min.apply(null, array)
    return min;
    }
  }

exports.max = function max (array) {
  if (!array || array.length === 0)  {
    return 0;
  }
  else{
    let max = 0;
    max = Math.max.apply(null, array)
    return max;
    }
  }

exports.avg = function avg (array) {
  if (!array || array.length === 0)  {
    return 0;
  }
let summ=0;
let avg=0;
      for (var i = 0; i < array.length; i++) {
        summ += array[i]
    } 
    avg=summ/array.length
  return avg;
}
