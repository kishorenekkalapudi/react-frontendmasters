

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



