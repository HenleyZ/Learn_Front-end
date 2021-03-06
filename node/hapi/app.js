const Hapi = require('hapi');
const server = new Hapi.Server();
// 配置服务器启动 host 与端口
const routesHelloHapi = require('./routes/hello-hapi')
const routesShop = require('./routes/shops')
const routesOrders = require('./routes/orders')
const config = require('./config')
const pluginHapiSwagger = require('./plugins/hapi-swagger')
server.connection({
  port: config.port,
  host: config.host,
});

const init = async () => {
  await server.register([
    ...pluginHapiSwagger
  ])
  server.route([
    // 创建一个简单的 hello hapi 接口
    ...routesHelloHapi,
    ...routesShop,
    ...routesOrders
  ]);
  // 启动服务
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();
