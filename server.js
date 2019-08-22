const createApp = require("./app");
const server = require("express")();
const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('./index.template.html', 'utf-8')
});

server.get('*', (req, res) => {
  const app = createApp({url: req.url});
  const context = {
    title: 'Vue SSR',
    meta: `
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="description" content="Vue.js 服务端渲染指南">`
  };
  renderer.renderToString(app, context, ((err, html) => {
    // 处理错误
    if (err) {
      res.status(500).end('Internal Server Error');
      return;
    }
    res.end(html);
  }));
});

server.listen(3000, () => console.log('example app listening on port 3000'));