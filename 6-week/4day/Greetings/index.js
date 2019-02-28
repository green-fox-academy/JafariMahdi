const express = require('express');
const app = express();
const PORT = 3000;


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  //console.log(req.query)
  let name = req.query.name;
  if (name === undefined) {
    res.render('home', {
      name: ` well come back Gust`
      
      // res.render('home',{ query req.query})  
    })
  } else {
    res.render('home', {
      name: `well come back ${name}`
    });
  }
});

app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
