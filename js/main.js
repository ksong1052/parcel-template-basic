console.log('Hello Parcel');

async function test() {
  const promise = Promise.resolve(123);
  console.log(await promise);
}
test();

// Error: Uncaught ReferenceError: regeneratorRuntime is not defined
// "aysnc&await"을 사용하기 위해서는 아래의 것을 설치해 줘야 한다. 
// 1. @babel/plugin-transform-runtime
// 2. .babelrc.js의 plugins에 추가 