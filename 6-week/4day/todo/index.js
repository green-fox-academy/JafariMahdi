const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

let todos = ['get up', 'survive', 'go back to bad'];

app.get('/', (req, res) => {
  res.render('home', { 
    todosKey: todos 
    }  
  //or {todos} -> the render() method accepts only objects ez a second parameter
  //this automatically be interpreted as this: {todos:todos}
  );
});


app.listen(PORT, () => {
  console.log(` Great Body,Server is Runing ;) ${PORT}`);
});
