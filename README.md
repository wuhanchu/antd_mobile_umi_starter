# antd_mobile_umi_dva_starter

该项目主要以 [UMI](https://umijs.org/zh/) + [DVA](https://dvajs.com/) 为底层框架，以[Ant Design Mobile](https://mobile.ant.design/)为 UI 组件库，包含完整的前端工程化实践。

部分代码及功能参考于 [Ant Design pro](https://pro.ant.design/)

:clap: 已经支持微信开发，相见 [wx](https://github.com/hqwlkj/umi-dva-antd-mobile/tree/wx) 分支。

## 目录结构

    |-- config                                # umi 配置，包含路由，构建等配置
    |-- mock                                  # 本地模拟数据
    |-- public
    |   |-- favicon.png                       # favicon
    |-- src                                   #
    |   |-- assets                            # 本地静态资源
    |   |-- components                        # 业务通用组件
    |   |-- layout                            # 通用布局
    |   |-- models                            # 全局 dva model
    |   |-- services                          # 后台接口服务
    |   |-- pages                             # 业务页面入口和常用模板
    |   |-- e2e                               # 集成测试用例
    |   |-- global.less                       # 全局样式
    |   |-- global.tsx                         # 全局 JS
    |   |-- theme.js
    |-- tests                                 # 测试工具
    |-- .gitignore                            # git忽略文件
    |-- .editorconfig                         # 编辑器代码风格配置
    |-- .eslintignore                         # eslint忽略文件
    |-- .eslintrc                             # eslint规则
    |-- .prettierignore                       # 代码风格配置忽略文件
    |-- .prettierrc                           # 代码风格配置文件
    |-- .stylelintrc                          # 样式风格配置文件
    |-- package.json
    |-- README.md

## 安装环境

Install `node_modules`:

```bash
npm install
```

or

```bash
yarn installe
```

### 运行

```bash
npm start
```

### 编译

```bash
npm run build
```

### 检查代码规范

```bash
npm run lint
```

你可以运行下面的代码来修改代码规范问题:

```bash
npm run prettier
```

### 运行单元测试

```bash
npm test

更多命令可在[package.json](./package.json)中查看
