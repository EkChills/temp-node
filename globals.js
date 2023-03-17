console.log(__filename);
let inter = setInterval(() => {
  console.log('hello world');
},1000)

setTimeout(() => {
  clearInterval(inter)
}, 1200)