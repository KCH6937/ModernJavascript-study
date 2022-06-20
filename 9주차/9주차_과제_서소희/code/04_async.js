async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return 10;
}

async function f() {
  return await wait();
}

console.log(f());
