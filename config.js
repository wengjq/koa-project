module.exports = {  
  home: __dirname,
  // db_debug: true,

  routes:[{
    path: __dirname,
    folder: 'routes'
  }],
  
  database: {
    "development": {
      'host': 'localhost',
      'port': '27017',
      'db': 'koa-shop'
    }
  }
}