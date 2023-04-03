# Muon Threshold Signature

## Run on local/dev envs

```
$ npm install
$ npm run subscribe # Runs the subsriber service that loads data from redis pubsub queue and save into MongoDB
  
$ npm start # Runs the web serice  

```

## Run on prod envs  

```
$ npm install  
$ npm install pm2 -g  
$ pm2 start ecosystem-subscribe.config.js  
$ pm2 start ecosystem-server.config.js  

```
