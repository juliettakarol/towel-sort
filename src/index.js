
// You should implement your task here.

module.exports = function towelSort (matrix) {
if (matrix === undefined){
  return []
} else{
  let c = []
  matrix.forEach((item, index) => {
    if(index === 0 || index%2 ===0){
      item.forEach((i) => {
        c.push(i)
      })
    } else {
      item1 = item.reverse()
      item1.forEach((i) => {
        c.push(i)
      })
    }
    
  })
  
  return [...c];
}

  
}

