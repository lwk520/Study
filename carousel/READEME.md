[carousel1.0演示](https://lwk520.github.io/Study/carousel/carousel1.0.html)
[carousel2.0演示](https://lwk520.github.io/Study/carousel/carousel2.0.html)

#### 思路：
#### 1.0版本
* 最重要的是在前后2张分别添加DOM元素，对应的分别是最后一张和第一张。这样从第一张切换的时候其实是显示的是你添加的最后一张图片在之后瞬间切换到真正的第一张
* 要封装出pre和next带有n的参数，用n来控制图片的移动数量，以便之后直接用下面的小tab的切换的
#### 2.0版本。
* 2.0版本不需要整体偏移。我做的是利用z-index来改变图片的切换，因为使用jquery的opacity会display:none。
* 对1.0版本做了一下改动：首先没有添加DOM节点，比如你要切换下一张，给下一张图片添加一个class,pre这样在前一张图片消失之后马上切回pre的图片
