# todolist-redux
使用redux来实现todolist

# react & context
1. 通过react官方的脚手架create-react-app新建一个react项目，但是如果你要自己添加一些配置你会发现，新建的项目中并没有任何配置文件，其实webpack相关的配置文件只是被隐藏了，可以通过命令：npm run eject 把webpack的相关配置文件暴露出来。

2. super（关键字），既可以当作函数使用，也可以当作对象使用。super作为函数调用时，代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次super函数。super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。

3. Refs用于访问在 render 方法中创建的 DOM 节点或 React 元素。

4. DOM元素的style 接受一个采用小驼峰命名属性的 JavaScript 对象，而不是 CSS 字符串。

5. 高阶组件就是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件【没有副作用的纯函数】。
    - 高阶组件可以传递所有的props属性给包裹的组件，但是不能传递refs引用

6. React.forward(function(props,ref){})【参数传递一个函数，这个函数需要返回内层组件，并在其中将需要传递的ref绑定到内层组件中】

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!