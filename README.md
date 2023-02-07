# auth
Description: Auth service allows users to sign up, log in, modify account details and be issued Json Web Tokens (JWTs) to be used for verification by this service. Users have roles and verification endpoints check for both user identity and role permissions.

## Start Up
```
npm install
npm start
```
This service is currently using env variables from gcp cloud run to load in configuration for connection to proxysql compute engine instance, therefore it won't work locally unless you change the values in db config
