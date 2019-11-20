const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');

// Woocommerce
const products = require('./routes/api/products');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// DB config
mongoose.set('useFindAndModify', false);
const DB = require('./config/keys').mongoURI;

// Mongoose.connect(config.DB,{ useNewUrlParser: true }));
mongoose.connect(DB, {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false  })
.then(() => console.log('DB connected'))
.catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);

app.use('/api/products', products);

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server is running'));

// var server = http.createServer(function(req,res){
//   res.end('test');
// });

// server.on('listening',function(){
//   console.log('Server is running');
// });

// server.listen(PORT);
