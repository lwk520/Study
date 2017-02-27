题目1： 如何全局安装一个 node 应用?
```
安装：npm install -g XXX
卸载：npm uninstall -g XXX
```

题目2： package.json 有什么作用？
```
  所有的npm包都会包括这个package.json，通常这个文件是项目的根源。它包含了关于项目的各种各样的元数据
，并且给出能让npm识别这个项目的信息。
```
参考：[What's the file 'package.json'](https://docs.nodejitsu.com/articles/getting-started/npm/what-is-the-file-package-json/)                
     [packagejson](http://javascript.ruanyifeng.com/nodejs/packagejson.html)

题目3： npm install --save app 与 npm install --save-dev app有什么区别?

* 首先，要区分dependencies和devDependencies。前者是项目开发环境必需的依赖，后者是方便于项目使用开发的工具。
* 所以，npm install --save app 是下载项目依赖（dependencies）中的app。npm install --save-dev app下载的是方便开发的工具（devDependencies）的app。

题目4： nodule_modules的查找路径是怎样的?

1. require的内容以./或者../开头的按照正常的查找路径。

2. require内容不加./或者../查找的js文件。规则是从当前node_modules 文件夹加载,如果找到了就停止,如果没有就查找上层目录的node_modules文件夹,只要找到或者查到根路径为止。
> 比如, 如果当前文件是'/home/ry/projects/foo.js' 然后require('bar.js'), 那么node将会按照以下路径查找
/home/ry/projects/node_modules/bar.js
/home/ry/node_modules/bar.js
/home/node_modules/bar.js
/node_modules/bar.js

3. 当你require一个app的插件（或者文件夹名字）的时候。首先会到nodule_moudules文件夹下面找到叫做app的文件夹。接着读取app文件夹下面的package,json，找到main的关键词。最后根据main的路径找到对应插件的js，返回exports给require。

参考[nodejs路径repuire的路径规则
](https://my.oschina.net/lirongfei/blog/163069)


题目5： npm3与 npm2相比有什么改进？yarn和 npm 相比有什么优势? (选做题目)

*  npm2和npm3有一个很大的区别, 就是组织包的结构. npm2组织依赖的包是按照树形组织的. npm3将其改进为扁平结构

* npm2会将所依赖的包存放到当前目录的./node_modules/目录下. 而被安装的包又会依赖其他的包的话, 则会存放到该包的./node_modules下. 所以, 当依赖结构很复杂的时候, 目录结构会非常深. 不管是性能还是操作上, 体验都不怎么好。

* 而在npm3中, 采用扁平的目录结构, 二级依赖会放到当前目录的node_modules的里, 与一级包在同一目录。

参考：[npm2和npm3的区别](http://www.jianshu.com/p/d72e3f451a08)

题目6： 使用 webpack 替换 入门-任务15中模块化使用的 requriejs

[效果](https://lwk520.github.io/Study/webpack-test/)
