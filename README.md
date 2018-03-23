# vue-music-project


	install dependencies
	npm install

	serve with hot reload at localhost:8080
	npm run dev

	build for production with minification
	npm run build

	build for production and view the bundle analyzer report
	npm run build --report

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 我的笔记
项目目录结构：

	--api:跟后端请求相关的代码ajax,jsonp请求
	--common:通用的静态资源图片，字体，js,css
	--components:组件
	--router:路由
	--store:vuex代码
	--main.js入口文件

## stylus
[stylus学习网站1](http://www.zhangxinxu.com/jq/stylus/ '博客')

[stylus学习网站2](https://segmentfault.com/a/1190000002712872 '简书')

注意：stylus，less，sass[可以不在webpack里面进行配置](https://lvyongbo.gitbooks.io/vue-loader/content/configurations/pre-processors.html)，一定要加上lang属性
可以webpack里面进行[配置](https://segmentfault.com/q/1010000008749926)，最好加lang属性

在style标签里面引入文件路径前[需要加~](https://github.com/shama/stylus-loader)

	npm install stylus stylus-loader --save-dev
	<style scoped lang="stylus" rel="stylesheet/stylus">
	//引入stylus文件
	//方法一：
	@import "~common/stylus/variable"
	//方法二：
	@import "../../common/stylus/variable"//相对路径
	#app
  	color: $color-theme;
	</style>



坑一：icon.styl里面引入了字体文件，我的fonts文件夹里面没有字体文件，导致编译一直出错

## webpack
webpack.base.config.js里面的resolve的alias别名进行配置。主要是为了后期写文件路径更方便，而且得到的是绝对路径
例如'common': resolve('src/common'),

## package.json
需要安装的模块：
babel-runtime:对ES6的一些语法做编译
fastclick:解决移动端点击300ms延迟的问题
babel-polyfill对ES6的一些api做转义.

## main.js
需要在main.js里面引入import 'babel-polyfill'
引入import fastclick from 'fastclick'，绑定到body上面fastclick.attach(document.body)

## css
1. 小图标和文字对齐，对小图标做如下设置
```
    display: inline-block;
    vertical-align: middle;
    margin-top: -12px;
```
2. flex
```
    display: flex;
    height: 44px;
    line-height: 44px;
```
    display为flex的时候设置line-height，该元素里面的子元素不会独占一行，还是会在一行上面显示
3. 让轮播图上面的一排小点就中，对小点的父元素设置样式
```
    position: absolute;
    right: 0;
    left: 0;
    text-align: center;
```

未知宽高div水平垂直居中[3种方法](http://blog.csdn.net/rongku/article/details/40452231)

## vue
1. 本项目中有一个基础组件库（base文件夹）和一个业务组件库（components文件夹）
在实际工作中，我们会把基础组件库放到一个npm的模块，然后通过npm去安装依赖（vue组件发布到npm？）
2. this.$refs.sliderGroup.children
this.$refs.xxx获取到的就是DOM节点
3. 在recommend组件里面异步获取数据需要一些的时间，数据还没获取到的时候，slider组件里面mounted已经执行，从而slot里面没有元素。
解决办法：在recommend组件引用的slider组件外面元素加一个v-if.也就是说当已经获取到数据之后，slider组件才会进行渲染。
4. 给实例添加属性
data里面的数据，methods里面的方法，计算属性等都会作为实例的属性。直接通过this.a="hello"赋值，会改变属性的值
在不同的方法中都需要用到，可以直接在实例上面添加属性this.slider
5. Vue 监听 window.resize事件 http://www.cnblogs.com/erbingbing/p/6340930.html
可以在 mounted 钩子中, 监听 resize 事件
```
	window.addEventListener('resize', () => {
      this._setSliderWidth(true)
      this.slider.refresh()
    })
```
6.<keep-alive> 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。它自身不会渲染一个 DOM 元素，也不会出现在父组件链中。
主要用于保留组件状态或避免重新渲染。
activated(keep-alive 组件激活时调用) 和 deactivated(keep-alive 组件停用时调用) 将会在 <keep-alive> 树内的所有嵌套组件中触发
7.当组件里面有计时器的时候，在组件销毁的时候，一定要把计时器清除.有利于内存的释放
```
destroyed(){
      clearTimeout(this.timer)
    }
```

## vue-router
active时的类名
active-class：默认值: "router-link-active"

设置 链接激活时使用的 CSS 类名。默认值可以通过路由的构造选项 linkActiveClass 来全局配置。

## jsonp
[jsonp的库](https://github.com/webmodules/jsonp)

用法：jsonp(url, opts, fn)

回调函数fn有两个参数err，data.假如err为null，就表示成功，如果失败会返回Error对象

## webstorm
webstorm配置babel之后报错Couldn't find preset "es2015" relative to directory
[解决方法](https://www.zhihu.com/question/43414079)

## babel

需要另外安装的库：

"babel-cli"  给d=webstorm的babel配置watch-file

"babel-preset-es2015" 解决webstorm不能正确解析ES6语法

框架自带安装的：

ES7不同阶段语法提案的转码规则（共有4个阶段），选装一个babel-preset-stage-0|1|2|3

## js
1. 可把字符串作为URI 组件进行编码
encodeURI方法不会对下列字符编码:ASCII字母、数字、~!@#$&*()=:/,;?+'
encodeURIComponent方法不会对下列字符编码 ASCII字母、数字、~!*()'
所以encodeURIComponent比encodeURI编码的范围更大。
2. scrollWidth
  是对象的实际内容的宽，不包边线宽度，会随对象中内容的多少改变（内容多了可能会改变对象的实际宽度）。
  clientWidth
  是对象可见的宽度，不包滚动条等边线，会随窗口的显示大小改变。
  offsetWidth
  是对象的可见宽度，包滚动条等边线，会随窗口的显示大小改变。


## 移动端
DOM成功渲染之后做一些操作可以用：
1. this.$nextTick()
2. setTimeout(fn,20)//因为浏览器的刷新通常是17毫秒一次，用20毫秒是一个比较科学的值

## ES6
什么时候用const,什么时候用let?
const是常数变量，即一般在require一个模块的时候用或者定义一些全局常量，一旦定义，无法更改，无法重复赋值
let 变量，块作用域，不能重复声明覆盖，限制了变量的作用域，保证变量不会去污染全局变量，所以尽量将var改为用let
大部分情况下const的出场率比let高很多，所以一般建议默认使用const，除非一定要改变变量的值，再使用let

## 模块化
例子：
1. recommend.vue组件需要请求数据，调用recommend.js里面的getRecommend()方法
2. recommend.js里面的getRecommend()方法里面，通过调用公共jsonp.js的jsonp(url, data, options)方法，将参数都传过去。把公共的参数提取出来放到config.js
3. jsonp.js的jsonp(url, data, options)方法是一个公共的发jsonp请求的方法

## 请求
请求头（Request Headers）里面有host和referer
前端不能直接修改Request Headers，我们需要通过后端代理的方式解决这个问题
在build/dev-server.js里面

	var axios = require('axios')
	var apiRoutes = express.Router()
	apiRoutes.get('/getDiscList', function (req, res) {
  	var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
  	axios.get(url, {
    	headers: {
      	referer: 'https://c.y.qq.com/',
      	host: 'c.y.qq.com'
    },
   		params: req.query
  	}).then((response) => {
    	res.json(response.data)
  	}).catch((e) => {
    	console.log(e)
  	})
	})
	app.use('/api', apiRoutes)

这里我们定义一个/getDiscList的路由，通过axios发送http请求(从 node.js 创建 http 请求,可以修改headers的referer和host)，同时修改referer和host.
从浏览器端发来的请求参数透传给服务端。通过res.json将响应的内容输出到浏览器端
我们做的这个是demo可以用qq音乐的请求接口，如果做的是应用，数据量大，我们的接口会被封掉的

保护接口：不希望别人直接通过浏览器抓接口，可以设置host和referer。再狠一点，可以做参数验签，请求接口一定要带签名参数

## better-scroll
轮播图
第三方库better-scroll,接近iscroll
slider.vue

	<div class="slider-group" ref="sliderGroup">
    	<slot></slot>
  	</div>

slider.vue组件mounted的时候slot里面元素还没有

recommend.vue里面获取数据是一个异步的过程。也就是说我们还没有获取到任何数据的时候，slider.vue组件里面的mounted已经执行了。这个时机是不对的，获取不到“slider-group”里面元素的个数等等。

为了确保slot里面的数据是有的，在recommend.vue组件里面slider元素外面的一层元素加一个属性 v-if="recommends.length"。也就是说，当我面已经获取到数据的时候，slider元素才会去渲染

slider.vue组件里面才能进行正确的计算。

	<div class="slider-wrapper" v-if="recommends.length">
        <slider>
          <div v-for="item in recommends">
            <a :href="item.linkUrl">
              <img :src="item.picUrl"/>
            </a>
          </div>
        </slider>
     </div>

在初始化better-scroll的时候，如果第一个参数是undefined，会报错。这里就可以做一个判断，保证不会出错
```
 _initScroll() {
  if (!this.$refs.wrapper) {
    return
    }
}
```

## css3动画库create-keyframe-animation

## js加兼容前缀
width: 80%;js计算宽度window.innerWidth * 0.8
list为组件，bgImage为元素

	this.$refs.list.$el.style.top = `${this.imageHeight}px`
	this.$refs.bgImage.style[transform] = `scale(${scale})`

## audio标签

	<audio ref="audio" :src="currentSong.url" @play="ready" @error="error" 	@timeupdate="updateTime"
    	@ended="end">
	</audio>

src播放地址，歌曲准备好可以播放的时候派发play事件，歌曲报错的时候派发error事件，歌曲在进行播放的时候派发timeupdate事件，歌曲播放完会派发end事件
audio标签有一个currentTime（当前时间）可以读写的属性

 	updateTime(e) {
        this.currentTime = e.target.currentTime
    },

### 或0操作符

	interval = interval | 0

保留整数部分，正数向下取整，负数向上取整

## 移动端事件
touchstart，touchmove一般都会加prevent阻止浏览器的默认行为
@touchstart.prevent="progressTouchStart"
@touchmove.prevent="progressTouchMove"

## 数组方法
findIndex:返回传入一个测试条件（函数）符合条件的数组第一个元素位置,数组中的每个元素都调用一次函数执行

	let index = list.findIndex((item) => {
        return item.id === this.currentSong.id
    })


## vuex的使用
1. 非父子组件传递复杂的数据
2. 很多组件共用的数据

vuex的action
1. 异步操作；
2. 对mutation的封装，某个动作需要触发多个mutation的时候，通过调用一个action修改多个mutation

## 请求截流
函数的柯里化:在一个函数中首先填充几个参数(然后再返回一个新函数)的技术称为柯里化.延迟计算、参数复用、动态生成函数的作用

	export function debounce(func, delay) {
  		let timer
  		return function (...args) {
    	if (timer) {
      	clearTimeout(timer)
    	}
    	timer = setTimeout(() => {
      	func.apply(this, args)
    	}, delay)
  		}
	}
## 其他
Element.getBoundingClientRect()方法返回元素的大小及其相对于视口的位置

复制一个数组的副本let _arr = arr.slice()

对base64进行解码的库$ npm install --save js-base64

解析歌词：npm install lyric-parser

Promise.resolve(value)方法返回一个以给定值解析后的Promise对象

	var promise1 = Promise.resolve([1, 2, 3]);
	promise1.then(function(value) {
  	console.log(value);
  	// expected output: Array [1, 2, 3]
	});

scroll组件从隐藏到显示，显示之后DOM才能被正确计算，这时才需要调用refresh重新计算scroll组件的高度

打包：vendor比较大，线上开启gzip会小很多，只要不修改依赖，vendor的hash是不变的,上线的话能被缓存下来

优化app.js的体积：对路由组件都做异步加载（路由懒加载）Vue.js 允许将组件定义为一个工厂函数，异步地解析组件的定义。Vue.js 只在组件需要渲染时触发工厂函数，并且把结果缓存起来，用于后面的再次渲染

	const Foo = () => import('./Foo.vue')

上线的时候需要配webpack.base.conf里面的output的publicPath，即config文件夹里面index.js的assetsPublicPath指向最终的线上资源的地址

修改vue的版本号的时候，一定要将vue-template-compiler改成和vue同一版本号

移动端调试：
插件Tencent/vConsole：console.log应用在移动端
在入口文件中引用

	/* eslint-disable no-unused-vars */
	import VConsole from 'vconsole'
	var vConsole = new VConsole()

移动端抓包
1. mac上的抓包工具charles
2. windows抓包工具fiddler
