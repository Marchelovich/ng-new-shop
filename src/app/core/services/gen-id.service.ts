export function *getNewID() {
  let i = 0;
  while (true) {
    i = i + 1;
    yield i;
  }
}
