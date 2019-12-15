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
    numbers: "",
    arr: [30, 60, 90, 120]
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
    } else if (this.data.canIUse) {
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
  getUserInfo: function () {
    wx.getUserInfo({
      success: res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
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
          result = result.match(/(?<=\?b=).*/);
          this.setData({
            show: result
          })
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

  setTime: function (event) {
    let value = event.currentTarget.dataset.value
    wx.showModal({
      title: '弹窗标题',
      content: '当前使用的设备是：' + this.data.show + '，当前选择使用时间为' + value + '分钟，价格为：' + value * 0.2 + '元。',
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
  },
  numberInput: function (e) {
    this.setData({
      numbers: e.detail.value
    })
  },

  bindKeyInput: function (event) {
    let value = this.data.numbers;
    wx.showModal({
      title: '弹窗标题',
      content: '当前使用的设备是：' + this.data.show + '，当前选择使用时间为' + value + '分钟，价格为：' + value * 0.2 + '元。',
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
  },

})