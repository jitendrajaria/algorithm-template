class BinarySearch {
  constructor(arr) {
    this.arr = arr;
  }

  upperBound(target) {
    let arr = this.arr;
    const n = arr.length;
    let low = 0;
    let high = n - 1;
    while (low < high) {
      let mid = Math.floor(high - (high - low) / 2) + 1;
      if (arr[mid] > target) {
        high = mid - 1;
      } else {
        low = mid;
      }
    }
    if (arr[low] !== target) {
      return -1;
    }
    return low;
  }

  lowerBound(target) {
    let arr = this.arr;
    const n = arr.length;
    let low = 0;
    let high = n - 1;
    while (low < high) {
      let mid = Math.floor(high - (high - low) / 2);
      if (arr[mid] >= target) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }
    if (arr[low] !== target) {
      return -1;
    }
    return low;
  }
}
const bs = new BinarySearch([0, 1]);
console.log('Executing');
console.log(bs.lowerBound(1));
console.log(bs.upperBound(2));
