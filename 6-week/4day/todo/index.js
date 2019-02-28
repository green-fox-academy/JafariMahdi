const express = require('express');
const app = express();
const PORT = 3000;
app.set('view engine', 'ejs');

let todo = ['get up', 'survive', 'go back to bad'];

app.get('/', (req, res) => {
  res.render('home', { name: todo });

})
app.listen(PORT, () => {
  console.log(` Great Body,Server is Runing ;) ${PORT}`);
})