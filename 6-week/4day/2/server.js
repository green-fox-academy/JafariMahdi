
const express = require('express');
const app = express();     // save this method in this app 

const PORT = 3000;         
app.set('view engine', 'ejs');


app.get('/', (req , res) =>{
  let data = {
    name: 'Astral',
    day : '4'
  }

  res.render('index',data);
})
app.listen(PORT,() =>{
console.log(`server is running`);

})
