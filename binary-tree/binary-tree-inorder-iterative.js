function iterativeInorder(root) {
  let st = [];
  while (st.length > 0 || root) {
    while (root) {
      // DO something here
      st.push(root.left);
      root = root.left;
    }
    curr = st.pop();
    curr = curr.right;
  }
}
