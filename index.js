//loading express into the file
const express = require('express');


//set up express app
const app = express();

//telling express to use the specified routes
app.use('/api', require('./routes/api'));

//listen for requests
app.listen(process.env.PORT || 4000, function(){
  console.log("now listening for requests");
});
