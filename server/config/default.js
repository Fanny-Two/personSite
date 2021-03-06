const config = {
  // 启动端口
  port: 3000,
  // 数据库配置
  mysql: {
    host: '120.78.71.60',
    user: 'root',
    password: 'genluo123',
    database: 'personSite',
    HOST: 'localhost'    
  },
  // 缓存进行优化
  openUrlCache: false,
  urlCache: {
    max: 100,
    maxAge: 1000 * 60 * 60 // 1hour
  },
  // session进行配置
  sessionConfig: {
    key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
    maxAge: 0,
    overwrite: true, /** (boolean) can overwrite or not (default true) */
    httpOnly: true, /** (boolean) httpOnly or not (default true) */
    signed: true, /** (boolean) signed or not (default true) */
    rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
    renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
  },
  // 登录状态拦截器(或)
  status: {
    enable: true,
    match: /^\/api\/admin/g,
  },
  // 日志文件配置
  // http://www.wangweilin.net/static/pages/log4js-node.html
  logger: {
    "appenders": {
      "console": {
        "type": "console"
      },
      "trace": {
        "type": "dateFile",
        "filename": "./logs/access-",
        "pattern": ".yyyy-MM-dd.log",
        "alwaysIncludePattern": true,
        "maxLogSize ": 31457280
      },
      "http": {
        "type": "logLevelFilter",
        "appender": "trace",
        "level": "trace",
        "maxLevel": "trace"
      },
      "info": {
        "type": "dateFile",
        "filename": "./logs/info-",
        "encoding": "utf-8",
        "pattern": ".yyyy-MM-dd.log",
        "maxLogSize": 10000000,
        "alwaysIncludePattern": true,
        "layout": {
          "type": "pattern",
          "pattern": "[%d{ISO8601}][%5p  %z  %c] %m"
        },
        "compress": true
      },
      "maxInfo": {
        "type": "logLevelFilter",
        "appender": "info",
        "level": "debug",
        "maxLevel": "error"
      },
      "error": {
        "type": "dateFile",
        "filename": "./logs/error-",
        "pattern": ".yyyy-MM-dd.log",
        "maxLogSize": 10000000,
        "encoding": "utf-8",
        "alwaysIncludePattern": true,
        "layout": {
          "type": "pattern",
          "pattern": "[%d{ISO8601}][%5p  %z  %c] %m"
        },
        "compress": true
      },
      "minError": {
        "type": "logLevelFilter",
        "appender": "error",
        "level": "error"
      }
    },
    "categories": {
      "default": {
        "appenders": [
          "console",
          "http",
          "maxInfo",
          "minError"
        ],
        "level": "all"
      }
    }
  }
}

module.exports = config;
