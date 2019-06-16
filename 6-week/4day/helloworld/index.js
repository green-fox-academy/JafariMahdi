const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');     // here  view engine   tell going to views file

// home page
app.get('/', (req, res) => {
  // render `home.ejs`
  res.render('home', {      // render is method * tarjome mikonad * and send html file  to moshtary ya bazdid konandeh page
    greeting: 'Hello',
    name:'Mahdi'
  });
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
