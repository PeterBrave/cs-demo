// pages/index1/index1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false,
    show: "",
    numbers: "",
    arr: [30,60,90,120]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
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

  primary: function () {
    var that = this;
    var show;
    wx.scanCode({
      success: (res) => {
        this.show = res.result;
        that.setData({
          show: this.show
        })
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail: (res) => {
        wx.showToast({
          title: '失败',
          icon: 'success',
          duration: 2000
        })
      },
      complete: (res) => {
      }
    })
  },

  setTime: function(event) {
    let value = event.currentTarget.dataset.value
    wx.showModal({
      title: '弹窗标题',
      content: '当前使用的设备是：'+this.data.show+ '，当前选择使用时间为' + value + '分钟，价格为：' + value*0.2 + '元。',
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
  numberInput: function(e) {
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