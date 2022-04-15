var levelOrder = function (root) {
  let queue = [];
  let ans = [];
  let dict = {};
  if (root) queue.push({ curr: root, level: 0 });

  while (queue.length > 0) {
    let { curr, level } = queue.shift();

    if (curr.left) {
      queue.push({ curr: curr.left, level: level + 1 });
    }
    if (curr.right) {
      queue.push({ curr: curr.right, level: level + 1 });
    }
    if (!dict[level]) {
      dict[level] = [];
    }
    dict[level].push(curr.val);
  }

  for (let val of Object.values(dict)) {
    ans.push(val);
  }
  return ans;
};
