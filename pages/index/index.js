//index.js
//获取应用实例
const app = getApp()
var Bmob = require('../../utils/bmob.js');
Page({
  data: {
    //分页标签class条件判断的值
    tabArr: {
      tabCurrentIndex: 0
    },
    imgUrls: [
      'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=49374771,1143102565&fm=27&gp=0.jpg',
      'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1973832742,3333223898&fm=27&gp=0.jpg',
      'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=821564292,346385585&fm=27&gp=0.jpg'
    ],
    avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1683741969,4035451526&fm=27&gp=0.jpg',
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    motto: 'Hello World',
    array: [{
      name: '远飞家宴城',
      message: '销量: 100000000000',
      address: '地址: 北京市昌平区霍营旗胜家园',
    }, {
      name: '苏城家宴城',
      message: '销量: 1002046600',
      address: '地址: 北京市海淀区育新小区',
    }, {
      name: '路飞家宴城',
      message: '销量: 100000000000',
      address: '地址: 东海·霜月村',
    }, {
      name: '乌索普家宴城',
      message: '销量: 100000000000',
      address: '地址: 北京市昌平区霍营旗胜家园',
    }, {
      name: '乔巴家宴城',
      message: '销量: 100000000000',
      address: '地址: 北京市昌平区霍营旗胜家园',
    }, {
      name: '娜美家宴城',
      message: '销量: 100000000000',
      address: '地址: 北京市昌平区霍营旗胜家园',
    }, {
      name: '远飞家宴城',
      message: '销量: 100000000000',
      address: '地址: 北京市昌平区霍营旗胜家园',
    }, {
      name: '远飞家宴城',
      message: '销量: 100000000000',
      address: '地址: 北京市昌平区霍营旗胜家园',
    }, {
      name: '远飞家宴城',
      message: '销量: 100000000000',
      address: '地址: 北京市昌平区霍营旗胜家园',
    }, {
      name: '远飞家宴城',
      message: '销量: 100000000000',
      address: '地址: 北京市昌平区霍营旗胜家园',
    }, {
      name: '远飞家宴城',
      message: '销量: 100000000000',
      address: '地址: 北京市昌平区霍营旗胜家园',
    }, {
      name: '远飞家宴城',
      message: '销量: 100000000000',
      address: '地址: 北京市昌平区霍营旗胜家园',
    }, {
      name: '远飞家宴城',
      message: '销量: 100000000000',
      address: '地址: 北京市昌平区霍营旗胜家园',
    }, {
      name: '远飞家宴城',
      message: '销量: 100000000000',
      address: '地址: 北京市昌平区霍营旗胜家园',
    }, {
      name: '远飞家宴城',
      message: '销量: 100000000000',
      address: '地址: 北京市昌平区霍营旗胜家园',
    }, {
      name: '远飞家宴城',
      message: '销量: 100000000000',
      address: '地址: 北京市昌平区霍营旗胜家园',
    }],
  },
  //事件处理函数
  //触摸分页标签触发事件
  veHandle: function (e) {
    var currentIndex = e.target.dataset.index
    this.setData({
      "tabArr.tabCurrentIndex": currentIndex
    })
  }
})
