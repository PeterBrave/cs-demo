# CS-DEMO开发日志

2019/12/04
完成基本功能pharse1

- 扫一扫读取设备数据
- 正确显示设备号
- 用户可以选择使用时常
- 用户可以自定义使用时常，并点击确认
- 点击使用时常或者确认按钮时回弹出，当前使用的信息，当前选择的时常，所需的价格。
- 用户确定无误后可以点击确认按钮，进行支付（未作）。用户发现问题，可以点击取消按钮。

---

2019/12/15

- 二维码的限定（不是什么样的二维码都可以扫出来）
    - 需求：查看一下摩拜单车的二维码：
      `http://www.mobike.com/download/app.html?b=0106133365_1`
      前面一部分是下载链接，用于用户直接扫码可以下载App进行使用，且可以用于判断该二维码是否是合法的摩拜单车二维码。
      `?`后面的是当前车辆的参数，这个可以用作设备号。
    - 解决：因此二维码设计仿照摩拜单车二维码设计。
- 计费规则的完善（费用如何计算，显示）以及计费页面的设计
    - 简单设计计费规则页面设计：参考摩拜的页面。
- 用户输入限制
    - 需求：只能输入数字，单位是分钟。且应当限制最大输入的数字。如果输入有问题，弹出提示框，请用户重新输入。
    - 解决：微信input模块是可以限定输入字符长度以及输入类型。当前限定的字数是6，最大可以输入分钟数为999999分钟，已经很长很长时间了。这个反正可以随意更改。
- 用户登录
    - 需求：用户开启微信授权，获取用户数据。后期实际要做的化，应该让用户重新注册，并绑定到系统的后台。然后前后端怎么交互的，还是需要看一下。
    - 解决：简单的授权完成了，复杂的授权，关联用户后台数据等其他的操作，下一阶段再重新考虑。
- 界面美化
    需求：简介大方，突出重点。

---



TODO：phase3

- 界面设计与完善
    - 需求：参考其他设计，力求简洁大方。此外，优化弹框内容的显示。
    
- 微信小程序后台设计（Java springboot实现）这一部分好久没有接触了，因此需要复习一下啊。
    - 需求：这个需求会较为复杂，登陆逻辑（权限设计看有没有时间做，不过理解springboot的spring security很有必要！）还有其他的有待沟通，了解小程序的后台一般是如何设计的。

  