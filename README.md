# Muon Explorer Backend

## Run on local/dev envs

```
$ npm install
$ npm run subscribe # Runs the subscriber service that loads data from redis pubsub queue and save into MongoDB
  
$ npm start # Runs the web service  

```

## Run on prod envs  

```
$ npm install  
$ npm install pm2 -g  
$ pm2 start ecosystem-subscribe.config.js  
$ pm2 start ecosystem-server.config.js  

```
