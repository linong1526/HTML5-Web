[TOC]

# 组件Component

组件是 Vue最强大的功能之一，组件可以扩展 HTML 元素，封装可重用的代码。组件系统让我们可以用独立可复用的小组件来构建大型应用，几乎任意类型的应用的界面都可以抽象为一个组件树

![Alt text](./img/components.png "Optional title")

* 优点
  * 代码复用
  * 便于维护
  * 更好地分工


## 组件定义与使用

> 组件是可复用的 Vue 实例，所以定义组件时拥有与实例化Vue几乎一样的选项，如 data、computed、watch、methods 以及生命周期钩子等（无el选项，data必须为函数）

### 组件要求
* data必须为Function类型
* 每个组件必须只有一个根元素
* 注册时组件名可以是kebab-case或PascalCase，但在html页面上使用时，必须写成遵循W3C 规范中的自定义组件名 (字母全小写或包含一个连字符)

### 全局组件

使用Vue.component()创建的为全局组件，所有的Vue实例都可以使用
```javascript
    Vue.component('my-component', {
      // ... options ...
      template:'<p>我是全局组件</p>'
    })
```
### 局部组件
通过components选项注册的组件为局部组件，只能在当前组件中使用

```javascript
    
    var Child = {
        data(){
            return {
                name:'我是局部组件'
            }
        },
        template: '<h1>hello, {{name}}</h1>'
    }
     
    Vue.component('my-component', {
      template:`<div>
        <p>我是全局组件,Child只能在这里使用</p>
        <child />
      </div>`,
      components: {
        Child
      }
    })
```
### 使用组件

定义一个组件，相当于自定义一个html标签，使用时必须采用W3C标准的**小写字母**或**连字符**（驼峰必须使用连字符）

```html
    <div id="app">
      <my-component></my-component>
    </div>
```

> 注意：由于Vue 只有在浏览器解析和标准化 HTML 后才能获取模板内容，所以把组件嵌套在某些特定的元素（如table,ul,ol,select等）上时，会导致解析错误

```html
  <!-- 因为tbody中只能是tr -->
  <table>
    <tbody>
      <my-row></my-row>
    </tbody>
  </table>
```
```javascript
  Vue.component('my-row',{
    template:'<tr><td>test</td></tr>'
  });
```
>以上解析的结果为，tr被解析到了table外面，解决方式也很简单，利用特殊的is属性实现

```html
  <table>
    <tr is="my-row"></tr>
  </table>
```

## 组件通讯
每个组件的作用域都是独立的，不能直接在某个组件中使用其它组件的数据，必须以下通讯方式实现数据共享

### 父组件->子组件： props
1. 父组件操作：给子组件定义属性，并传递父组件数据
2. 子组件操作：通过`props`选项接收父组件数据，props中的数据会自动写入组件实例

> 注意：props属性会自动成为组件实例的属性（可通过`this.xx`访问）
> 单向数据流：prop传递是单向的，当父组件的属性变化时，将传导给子组件，但反过来不行


```js
    // 子组件代码
    Vue.component('mycomponent', {
      props: ['mytitle','msg'],
      template: '<div>{{ mytitle }}</div>'
    })

    // 父组件代码
    <mycomponent mytitle="静态数据" v-bind:msg="message" test="test"></mycomponent>

    let vm = new Vue({
      data:{
        message:'hello laoxie'
      }
    })
```


* 非prop属性：不通过props声明的属性（如上面的test属性）
  > 此类属性会自动成为组件根节点的属性（可通过`{inheritAttrs: false}` 关闭）

* prop数据验证
  > 对传入的prop属性进行校验，如：数据类型、必填、默认值等

```javascript
  Vue.component('my-component', {
    props: {
      // 基础的类型检查 (`null` 匹配任何类型)
      propA: Number,
      // 多个可能的类型
      propB: [String, Number],
      // 必填的字符串
      propC: {
        type: String,
        required: true
      },
      // 带有默认值的数字，无prop属性传入时，默认得到100
      propD: {
        type: Number,
        default: 100
      },
      // 带有默认值的对象
      propE: {
        type: Object,
        // 对象或数组默认值必须从一个工厂函数获取
        default: function () {
          return { message: 'hello' }
        }
      },
      // 自定义验证函数
      myscore: {
        validator: function (value) {
          // 这个值必须大于等于60，否则报错
          return val>=60
        }
      }
    }
  })
```

### 子组件->父组件： 

> PS：Vue遵循**单向数据流**原则，不允许在子组件中直接修改props传入的父组件数据（谁的数据谁修改），可以通过自定义事件系统，利用$emit()方法触发父组件函数来达到修改的效果

* 方式一：自定义事件（推荐）
  1. 父组件操作：给子组件自定义事件（如:`v-on:show`），并使用父组件的方法做为事件处理函数（handle）
  2. 子组件操作：通过`$emit()`触发自定义事件并传递数据
  ```js
      // 父组件代码
      <mycomponent v-on:show="handle" />

      // 子组件代码
      // 该代码会触发父组件的事件处理函数handle，从而实现数据传递
      this.$emit('show',100)
  ```

* 方式二：父组件方法传递到子组件执行，并回传数据

* 方式二：sync修饰符（简单数据可采用方案）
  1. 父组件操作：sync修饰符修饰v-bind指令
  2. 子组件操作：调用`this.$emit('update:xx',val)`触发修改

```js
  <div id="app">
    <mybutton v-bind:color.sync="color"></mybutton>
  </div>

    new Vue({
      el:'#app',
      data:{
          color:'red'
      },
      components:{
        mybutton:{
          template:'<button @click="changeColor">改变字体颜色</button>',
          methods:{
            changeColor(){
              this.$emit('update:color','#58bc58');
            }
          }
        }
      },
    })
```

### 兄弟组件通信（了解）
> 组件A与组件B具有共同父级的兄弟元素

1. 组件A -> 父组件
2. 父组件 -> 组件B
  

### 深层级/无关联组件通讯

> 利用一个Vue实例作为事件载体实现传参

- 接受方：自定义事件
- 发送方：$emit()触发自定义事件

```javascript
    // 需求：A组件发送数据到B组件

    // 定义中间桥梁bus
    let Bus = new Vue();

    //发送方: 组件A
    let comA = {
        data(){
            return {
              msg:'I am A'
            }
        },
        template:`<div>
            <p>{{msg}}</p>
            <button @click="send">传数据到B组件</button>
        </div>`,
        methods:{
            send(){
                Bus.$emit('data',this.msg);
            }
        }
    }

    // 接受方：组件B
    let comB = {
        data:()=>({
            msg:'I am B'
        }),
        mounted(){
            Bus.$on('data',val=>this.msg = val)
        },
        template:`<div><p>{{this.msg}}</p></div>`
    }

```

### 插槽内容
> 把html结构传递到子组件渲染，子组件使用`<slot/>`来承载传入的内容，实现组件可定制化

* 默认插槽: `<slot/>`
  * 子组件操作：定义并使用slot
    ```html
      <!-- my-component组件模板 -->
      <div>
        <slot></slot>
      </div>
    ```
  * 父组件操作：使用list组件
  ```html
    <my-component>
    <!-- 这里的html结构会自动写入上面的slot所在的位置 -->
      <h4>列表标题</h4>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </my-component>
  ```

* 具名插槽：给`<slot/>`组件命名（设置name属性）
  > 通过指令 `v-slot:name`（简写 `#name`）指定显示到哪个插槽（v-slot指令只在`<template/>`标签中使用）
  ```html
    <!-- 子组件：给插槽命名（无命名为默认插槽） -->
      <div>
        <slot name="header">该插槽的默认内容（不使用插槽时默认显示）</slot>
        <slot></slot>
        <slot name="footer"></slot>
      </div>

    <!-- 父组件：指定内容到某个插槽 -->
    <!-- Vue2.6+用法 -->
    <my-component>
      <template v-slot:header>这里的内容显示到name为header的插槽</template>
      <span>这里的内容显示到默认插槽</span>
      <template #footer>这里的内容显示到name为footer的插槽</template>
    </my-component>

    <!-- 老式用法（不推荐） -->
    <my-component>
      <span slot="header">这里的内容显示到name为header的插槽</span>
      <span>这里的内容显示到默认插槽</span>
      <span slot="footer">这里的内容显示到name为footer的插槽</span>
    </my-component>
  ```

* 作用域插槽
> 把子组件中的数据通过`<slot/>`传递到父组件，实现特殊定制

```html
  <!-- 子组件：给slot添加属性 -->
  <div class="box">
    <slot :msg="msg" :username="username">{{username}}，{{msg}}</slot>
    <slot name="footer" title="播放器" :player="player">{{player}}</slot>
  </div>

  <!-- 父组件：通过v-slot接收数据 -->
  <my-component>
    <!-- Vue2.6+用法 -->
    <template v-slot:default="props">{{props.msg}}，{{props.username}}</template>
    <template #footer="foot">{{foot.title}}，{{foot.player}}</template>

    <!-- 老式用法（不推荐） -->
    <div slot-scope="props">{{props.msg}}，{{props.username}}</div>
  </my-component>
```

## 内置组件

* `<component>` 动态组件
    * is：指定渲染的组件

  ```html
    <component v-bind:is="currentTabComponent"></component>
  ```
* `<keep-alive>` 缓存组件
  > 把切换出去的组件保留在内存中，可以保留它的状态或避免重新渲染可以添加一个 keep-alive 
  > 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们，主要用于保留组件状态或避免重新渲染

    * include（String/Regexp） ： 指定缓存组件名
    * exclude（String/Regexp） ： 指定不缓存的组件名

  ```html
    <keep-alive>
      <component v-bind:is="currentTabComponent"></component>
    </keep-alive>
  ```

* `<slot>` 内容分发（[详情](#插槽内容)） 

### 过渡动画
* `<transition>`  
* `<transition-group>`

> `<transition>`用于单个元素动画，`<transition-group>`用于多个元素并解析为一个标签（默认:span）

#### 属性
* name : 过渡类名前缀（默认：v）
  > 如设置`name="fade"`，过渡类名变成：`fade-enter` / `fade-enter-active` / `fade-leave` / `fade-leave-active`
* css  : 是否使用 CSS 过渡类（默认：true）。设置为 false，将只通过组件事件触发注册的 JavaScript 钩子。

* 自定义过渡类名（可配合animate.css框架实现过渡效果）
  * `enter-class`
  * `enter-active-class`
  * `enter-to-class`
  * `leave-class`
  * `leave-active-class`
  * `leave-to-class`
  ```html
    <transition
      enter-active-class="bounceIn"
      leave-active-class="bounceOut"
    >
    </transition>
  ```

#### 触发动画场景

> Vue会自动检测是否设置css动画或JavaScript钩子，并在下列情形中添加进入/离开过渡效果（css过渡或javascript过渡）

* 条件渲染 (使用 v-if)
* 条件展示 (使用 v-show)
* 动态组件
* 组件根节点

#### CSS过渡

* 通过CSS过渡类名
  > 组件过渡过程中，默认会有四个CSS类名自动进行切换，会有如下四个CSS类名：

  * v-enter：进入过渡的开始状态，元素被插入时生效，只应用一帧后立即删除；
  * v-enter-active：进入过渡的结束状态，元素被插入时就生效，在过渡过程完成之后移除；
  * v-leave：离开过渡的开始状态，元素被删除时触发，只应用一帧后立即删除；
  * v-leave-active：离开过渡的结束状态，元素被删除时生效，离开过渡完成之后被删除；

  ![transition](./img/transition.png "Optional title")


#### JavaScript过渡
> 通过内置事件实现过渡动画效果，可以利用第三方动画库（如：velocity.js,jquery等）实现动画效果

```html
    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:after-enter="afterEnter"
      v-on:enter-cancelled="enterCancelled"
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
      v-on:after-leave="afterLeave"
      v-on:leave-cancelled="leaveCancelled"
    >
    </transition>
```

```javascript
    methods: {
      // 过渡进入
      // 设置过渡进入之前的组件状态
      beforeEnter: function (el) {
        // ...
      },
      // 设置过渡进入完成时的组件状态
      enter: function (el, done) {
        // ...
        // 调用done表示动画完成
        done()
      },
      // 设置过渡进入完成之后的组件状态
      afterEnter: function (el) {
        // ...
      },
      enterCancelled: function (el) {
        // ...
      },
      // 过渡离开
      // 设置过渡离开之前的组件状态
      beforeLeave: function (el) {
        // ...
      },
      // 设置过渡离开完成时地组件状态
      leave: function (el, done) {
        // ...
        done()
      },
      // 设置过渡离开完成之后的组件状态
      afterLeave: function (el) {
        // ...
      },
      // leaveCancelled 只用于 v-show 中
      leaveCancelled: function (el) {
        // ...
      }
    }
```

---

**【案例】**

* 编写一个按钮组件
* 组件化todolist
* 开发goTop 返回顶部组件

**【练习】**

* 实现一个可复用的搜索组件
  > 支持界面定制，支持ajax
  ![](./img/com_search.png "Optional title")

* 封装一个列表组件实现商品展示
  > 支持排序，分页操作
* 封装一个step步骤条组件
![stpes](./img/steps.png "Optional title")


