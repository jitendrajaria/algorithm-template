function MinHeap(arr) {
  this.heap = this.buildHeap(arr);
}

MinHeap.prototype.heapify = function (arr, i) {
  let largest = i;
  let lChild = 2 * i;
  let rChild = 2 * i + 1;
  if (lChild < arr.length && arr[lChild] < arr[largest]) {
    largest = lChild;
  }
  if (rChild < arr.length && arr[rChild] < arr[largest]) {
    largest = rChild;
  }
  if (i != largest) {
    // console.log('largest', largest, i);
    [arr[largest], arr[i]] = [arr[i], arr[largest]];
    this.heapify(arr, largest);
  }
};

MinHeap.prototype.buildHeap = function (arr) {
  let arrToHeapify = [null, ...arr];
  const n = arrToHeapify.length;
  for (let i = n - 1; i > 0; i--) {
    this.heapify(arrToHeapify, i);
  }
  return arrToHeapify;
};

MinHeap.prototype.push = function (element) {
  this.heap.push(element);
  if (this.heap.length > 1) {
    let currIndex = this.heap.length - 1;
    let parent = Math.floor(currIndex / 2);
    while (currIndex > 1 && this.heap[parent] > this.heap[currIndex]) {
      [this.heap[parent], this.heap[currIndex]] = [this.heap[currIndex], this.heap[parent]];
      currIndex = parent;
      parent = Math.floor(currIndex / 2);
    }
  }
};

MinHeap.prototype.remove = function () {
  const smallest = this.heap[1];
  let len = this.heap.length;

  let curr = 1;
  let lChild = 2 * curr;
  let rChild = 2 * curr + 1;
  if (len > 2) {
    this.heap[1] = this.heap[len - 1];
    this.heap.splice(len - 1, 1);
    if (this.heap[lChild] && this.heap[rChild]) {
      while (this.heap[curr] > this.heap[rChild] || this.heap[curr] > this.heap[lChild]) {
        if (this.heap[rChild] < this.heap[lChild]) {
          [this.heap[rChild], this.heap[curr]] = [this.heap[curr], this.heap[rChild]];
          curr = rChild;
        } else {
          [this.heap[lChild], this.heap[curr]] = [this.heap[curr], this.heap[lChild]];
          curr = lChild;
        }
        lChild = curr * 2;
        rChild = curr * 2 + 1;
      }
    } else if (this.heap[lChild] < this.heap[curr]) {
      [this.heap[lChild], this.heap[curr]] = [this.heap[curr], this.heap[lChild]];
      curr = lChild;
    }
  } else if (len == 2) {
    this.heap.splice(1, 1);
  } else {
    return null;
  }
  return smallest;
};

MinHeap.prototype.getMin = function () {
  return this.heap[1];
};
