# todolist-redux
使用redux来实现todolist

# Redux
1. state 是应用的状态，一般本质上是一个普通对象【state = store.getState()】

2. store 是应用状态 state 的管理者，包含下列四个函数【store 由 Redux 的 createStore(reducer) 生成】：
    * getState() 获取整个 state
    * dispatch(action) 触发 state 改变的【唯一途径】
    * subscribe(listener) 可以理解成是 DOM 中的 addEventListener
    * replaceReducer(nextReducer) 一般在 Webpack Code-Splitting 按需加载的时候用
    
3. Redux 规定：一个应用只应有一个单一的 store，其管理着唯一的应用状态 state；不能直接修改应用的状态 state【若要改变 state，必须 dispatch 一个 action（action 是一个包含 type 属性的普通对象）】

4. Action（本质是一个对象）是把数据从应用传到 store 的有效载荷。它是 store 数据的唯一来源。一般通过 store.dispatch() 将 action 传到 store。其中type字段用来标识将要执行的动作。

5. Action Creator【一个函数】是 action 的创造者，本质上就是一个函数，返回值是一个 action（对象，必需包含type字段）

6. reducer(previousState,action) 是一个纯函数，根据previousState和action计算出新的state，更新并返回一个这个新state

7. combineReducers() 将多个 reducer 合并成为一个

8. createStore(reducer,)

9. connect方法（由React-Redux 提供），用于通过容器组件将 UI 组件与redux关联起来【从 Redux state 树中读取部分数据，并通过 props 来把这些数据提供给要渲染的组件】。
    1. connect方法接受两个参数：mapStateToProps和mapDispatchToProps。它们定义了 UI 组件的业务逻辑。前者负责输入逻辑，即将redux的state映射到 UI 组件的props，后者负责输出逻辑，即将用户对 UI 组件的操作映射成 Action。
    2. connect方法可以省略mapStateToProps参数，那样的话，UI 组件就不会订阅Store，就是说 Store 的更新不会引起 UI 组件的更新。
    
10. Redux 应用中数据的生命周期:
    - 调用 store.dispatch(action)。
    - Redux store 调用传入的 reducer 函数。
    - 根 reducer 应该把多个子 reducer 输出合并成一个单一的 state 树。
    - Redux store 保存了根 reducer 返回的完整 state 树。

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