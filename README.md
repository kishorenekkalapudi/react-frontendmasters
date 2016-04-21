

# for webpack to build during setup
webpack js/ClientApp.js public/bundle.js (put into script)

ls -lsa public/bundle.js (to see size)

# standard during setup for error checking
standard (to require in react)

# test scripts
npm run test
npm run build

# http-server to run app
http-server ./

# every time to reload
npm run build

# keep webpack on (with standard in package.json)
webpack --watch (but put this in package.json)
now just do: 
npm run watch

# webpack must be running
npm run watch



# server
// var path = require('path');
// var express = require('express');
// var webpack = require('webpack');
// var config = require('./webpack.config');

// var app = express();
// var compiler = webpack(config);

// // app.use(require('webpack-dev-middleware')(compiler, {
// //   noInfo: true,
// //   publicPath: config.output.publicPath
// // }));

// // app.use(require('webpack-hot-middleware')(compiler));

// app.use(express.static('public'));

// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.listen(process.env.PORT || 3000, 'localhost', function(err) {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log('Listening');
// });




