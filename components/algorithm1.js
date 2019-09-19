const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('input two number ', (answer) => {
  const [n1, n2] = answer.split(' ').map(v=>Number(v))
  let res
  if(n1>n2){
    res = '>'
  }else if(n1<n2){
    res = '<'
  } else {
    res = '=='
  }
  console.log(res)

  rl.close();
});
