//index.js
//获取应用实例
const app = getApp()
var Bmob = require('../../utils/bmob.js');
Page({
  data: {
    name: "",
    pwd: "",
  },
  //事件处理函数
  adduser: function () {
    if (this.data.name.length == 0) {
      wx.showToast({
        title: '名字不能为空',
        icon: 'none',
        duration: 1000
      })
      return;
    }
    if (this.data.pwd.length == 0) {
      wx.showToast({
        title: '密码不能为空',
        icon: 'none',
        duration: 1000
      })
      return;
    }

    var User = Bmob.Object.extend("_User");
    var user = new User();
    user.set("username", this.data.name);
    user.set("password", this.data.pwd);
    console.log("开始创建用户", this.data.name, this.data.pwd);
    //添加数据，第一个入口参数是null
    user.save(null, {
      success: function (result) {
        // 添加成功，返回成功之后的objectId（注意：返回的属性名字是id，不是objectId），你还可以在Bmob的Web管理后台看到对应的数据
        console.log("用户添加成功, 用户id:" + result.id);
      },
      error: function (result, error) {
        // 添加失败
        console.log('用户添加失败');

      }
    });
  },
  bindphone: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  bindpwd: function (e) {
    this.setData({
      pwd: e.detail.value
    })
  }
})
