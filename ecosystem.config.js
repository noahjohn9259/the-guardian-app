module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : "theguardianapp",
      script    : "./server.js",
      env_production : {
        NODE_ENV: "production"
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      key  : "./ssh/id_rsa",
      user : "carcareapp",
      host : "138.197.108.171",
      ref  : "origin/master",
      repo : "https://github.com/noahjohn9259/the-guardian-app.git",
      path : "/home/carcareapp/guardianapp",
      "post-deploy" : "nvm install && npm install && npm rebuild node-sass && npm run build-pm2 && ~/.nvm/versions/node/v6.9.4/bin/pm2 startOrRestart ~/guardianapp/source/ecosystem.config.js --env production"
    }
  }
}
