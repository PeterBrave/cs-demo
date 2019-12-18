// pages/index1/index1.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false,
    show: "",
    numbers: 0,
    arr: [30, 60, 90, 120, 150, 180],
    timeSelectWay: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad');
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  scanQRCode: function () {
    var that = this;
    var show;
    wx.scanCode({
      success: (res) => {
        console.log("扫码结果： ");
        console.log(res);
        //对res进行预处理
        var result = res.result;
        if (result.match(/^(http:\/\/www.mobike.com\/download\/app.html)/)) {
          result = result.match(/\?b=(.*)/)[1];
          console.log("result = "+result)
          this.setData({
            show: result,
          });
        } else {
          wx.showModal({
            title: "提示",
            content: "请扫描车身或者车锁上的二维码",
            showCancel: false,
            confirmText: "确定",
            success: function (res) {
              console.log(res)
            }
          })
        }
      },
      fail: (res) => {
      },
      complete: (res) => {
      }
    })
  },

  setectTime: function (event) {
    let btn_value = event.currentTarget.dataset.value;
    this.setData({
      numbers: btn_value,
    });
    console.log(this.data.numbers);
  },
  numberInput: function (e) {
    this.setData({
      numbers: e.detail.value,
    });
    console.log(e.detail.value);
  },
  changeTimeSelectWay: function () {
    this.setData({
      timeSelectWay: this.data.timeSelectWay?false:true,
      numbers: 0,
    })
  },

  submitButton: function (event) {
    let time = this.data.numbers;
    let deviceId = this.data.show;
    //加入登陆判断，如果用户不登陆，则跳转到用户页面，引导用户登陆，否则无法使用该服务！后期进行解耦
    wx.getSetting({
      success: function (res) {
        if (!res.authSetting['scope.userInfo']) {
          //未登录,跳转到登录页
          console.log("用户未登陆");
          wx.showModal({
            title: "提示",
            content: "请登陆后使用",
            showCancel: false,
            confirmText: "确定",
            success: function (res) {
              wx.switchTab({
                url: '/pages/index/index',
              })
            }
          })
          
        } else if (deviceId == "" && time == 0) {
          wx.showModal({
            title: "输入错误",
            content: "请扫描设备二维码，并输入使用时长！",
            showCancel: false,
            confirmText: "确定",
            success: function (res) {
              console.log(res)
            }
          })
        } else if (deviceId == "") {
          wx.showModal({
            title: "输入错误",
            content: "请扫描设备二维码",
            showCancel: false,
            confirmText: "确定",
            success: function (res) {
              console.log(res)
            }
          })
        } else if (time == 0) {
          wx.showModal({
            title: "输入错误",
            content: "请输入使用时长！",
            showCancel: false,
            confirmText: "确定",
            success: function (res) {
              console.log(res)
            }
          })
        } else {
          wx.showModal({
            title: '弹窗标题',
            content: '当前使用的设备是：' + deviceId + '，当前选择使用时间为' + time + '分钟，价格为：' + (time * 0.2).toFixed(2) + '元。',
            confirmText: "确认支付",
            cancelText: "取消",
            success: function (res) {
              console.log(res);
              if (res.confirm) {
                console.log('用户点击主操作')
              } else {
                console.log('用户点击辅助操作')
              }
            }
          });
        }
      }
    })
    
    
  },

})