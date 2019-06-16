
let numlist=[1,2,3,8,5,6];

let newlist= numlist.map(element =>{
  if (element === 8){
    element=4
  }
  return element
})

console.log(newlist);
