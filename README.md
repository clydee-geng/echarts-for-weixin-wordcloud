# echarts-for-weixin-wordcloud
### echarts词云微信小程序版

> 由于工作需要，且官方的[echarts-wordcloud](https://github.com/ecomfe/echarts-wordcloud)不支持微信小程序，于是在其基础上修改了部分代码，使其能够支持微信小程序。

### use

> 使用前请先了解[echarts-for-weixin](https://github.com/ecomfe/echarts-for-weixin)

1.将项目中的echarts-wordcloud拷贝到自己的项目中
2.引入wordcloud,并配置
```js
import wordCloud from "../../echarts-wordcloud/wordCloud";

wordCloud({
  createCanvas: function () {
    return wx.createOffscreenCanvas({
      type: "2d",
    });
  },
});

```
3.在page中使用(具体可查看pages/demo，和官方的echarts-wordcloud使用方法一样)

4.demo效果
![avatar](https://github.com/clydee-geng/echarts-for-weixin-wordcloud/blob/main/%E6%95%88%E6%9E%9C.gif?raw=true)

