const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('', (answer) => {
  const [hour, min] = answer.split(' ').map(Number)
  const hourUnit = 60
  const subMin = 45
  let res1
  let res2
  if(min>=subMin){
    res1 = hour
    res2 = min-subMin
  }else {
    if(hour===0){
      res1=23
    }else {
      res1=hour-1
    }
    res2=min+hourUnit-subMin
  }
  const rFirstZero = /^0/
  console.log(String(res1).replace(rFirstZero,''), String(res2).replace(rFirstZero,''))


  rl.close()
})
