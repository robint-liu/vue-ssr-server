const Vue = require('vue');
const App = require('./App');

/*
* 工厂模式：在函数内创建一个对象并给对象赋予属性及方法，最终将对象返回。
* 作用：解决了当创建多个对象时，代码重复的问题；虽创建多个相似的对象，但是却没有解决对象的识别问题(不知道这个对象的类型)
* */

// 应用程序、router 和 store 实例
module.exports = function createApp(context) {
  return new Vue({
    // 根实例简单的渲染应用程序组件。
    // render: h => h(App), //render失效
    data: {
      url: context.url
    },
    template: `<div>123</div>`
  });
};